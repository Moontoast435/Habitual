const usersController = require('../../../controllers/users');
const User = require('../../../models/User');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

describe('users controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('showAllUsers', () => {
        test('it returns users with a 200 status code', async () => {
            jest.spyOn(User, 'all', 'get')
                 .mockResolvedValue(['user1', 'user2']);
            await usersController.showAllUsers(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(['user1', 'user2']);
        });
    });

    describe('showUser', () => {
        test('it returns a user and their hashed password with a 200 status code', async () => {
            jest.spyOn(User, 'findByUsername')
                .mockResolvedValue(new User({ id: 1, username: 'Test', hashed_password: "testPassword"}));
            const mockReq = { params: { username: 'Test' } }
            await usersController.showUser(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith({ id: 1, username: 'Test', passwordDigest: "testPassword"});
        });
    });

    describe('deleteUser', () => {
        test('it returns a 204 status code on successful deletion', async () => {
            jest.spyOn(User.prototype, 'destroy')
                .mockResolvedValue('Deleted');
            
            const mockReq = { params: { username: "Test" } }
            await usersController.deleteUser(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(204);
        })
    });
});