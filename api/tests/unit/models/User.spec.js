const User = require('../../../models/User');

const pg = require('pg');
jest.mock('pg');

const pgdb = require('../../../dbConfig/pg/init');

describe('User', () => {
    beforeEach(() => jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('all static function' () => {
        test('it resolves with users on successful db query', async () => {
            jest.spyOn(pgdb, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}]});
            const allUsers = await User.all;
            expect(allUsers).toHaveLength(2);
        });
    });

    describe('create static function' () => {
        test('it resolves with users on successful db query', async () => {
            jest.spyOn(pgdb, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}]});
            const result = await User.create();
            expect(allUsers).toHaveLength(2);
        });
    });
});