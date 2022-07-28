const User = require('../../../models/User');

const pg = require('pg');
jest.mock('pg');

const pgdb = require('../../../dbConfig/pg/init');

describe('User', () => {
    beforeEach(() => jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('all static function', () => {
        test('it resolves with users on successful db query', async () => {
            jest.spyOn(pgdb, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}]});
            const allUsers = await User.all;
            expect(allUsers).toHaveLength(2);
        });
    });

    describe('create static function', () => {
        test('it resolves with users on successful db query', async () => {
            let userData = { username: 'testname', password: 'testingtest' };
            jest.spyOn(pgdb, 'query')
                .mockResolvedValueOnce({ rows: [{ ... userData, id:1 }]});
            const result = await User.create(userData);
            expect(result).toHaveProperty('id');
        });
    });

    describe('findByUsername static function', () => {
        test('it resolves with user on successful fb query', async () => {
            userData = { id: 1, username: 'test1', password: 'tu9ibtoi4tbh2hhuet' };
            jest.spyOn(pgdb, 'query')
                .mockResolvedValueOnce({ rows: [ userData ] });
            const result = await User.findByUsername('test1');
            expect(result).toBeInstanceOf(User);
        });
    });

    describe('destroy function', () => {
        test('it resolves with message on successful db query', async () => {
            jest.spyOn(pgdb, 'query')
                .mockResolvedValueOnce({ username: 'test1' });
            let testUser = new User({id: 1, username: 'test1', password: 'tu9ibtoi4tbh2hhuet'});
            const result = await testUser.destroy();
            expect(result).toBe('This user has now been deleted: test1. Bye bye!👋');
        });
    });
});