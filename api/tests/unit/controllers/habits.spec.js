const habitsController = require('../../../controllers/habits');
const Habit = require('../../../models/Habit');
const User = require('../../../models/User');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }));
const mockRes = { status: mockStatus };

describe('habits controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('showAllHabits', () => {
        test('it returns user\'s habits with a 200 status code', async () => {
            jest.spyOn(User, 'findByUsername')
                .mockResolvedValue(new User({ id: 1, username: 'Test', hashed_password: "testPassword"}));
            jest.spyOn(Habit, 'getUsersHabits')
                .mockResolvedValue([
                    {
                        "name": "Test1",
                        "dates": [
                            {
                                "date": "Test Date",
                                "complete": false
                            }
                        ],
                        "frequency": {
                            "daily": true,
                            "weekly": false
                        },
                        "createdAt": "Test",
                        "userID": 1,
                        "_id": "testId1",
                        "__v": 0
                    },
                    {
                        "name": "Test2",
                        "dates": [
                            {
                                "date": "Test Date",
                                "complete": false
                            }
                        ],
                        "frequency": {
                            "daily": true,
                            "weekly": false
                        },
                        "createdAt": "Test",
                        "userID": 1,
                        "_id": "testId2",
                        "__v": 0
                    }
                ]);
            const mockReq = { params: { username: 'Test' } }
            await habitsController.showAllHabits(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith([
                {
                    "name": "Test1",
                    "dates": [
                        {
                            "date": "Test Date",
                            "complete": false
                        }
                    ],
                    "frequency": {
                        "daily": true,
                        "weekly": false
                    },
                    "createdAt": "Test",
                    "userID": 1,
                    "_id": "testId1",
                    "__v": 0
                },
                {
                    "name": "Test2",
                    "dates": [
                        {
                            "date": "Test Date",
                            "complete": false
                        }
                    ],
                    "frequency": {
                        "daily": true,
                        "weekly": false
                    },
                    "createdAt": "Test",
                    "userID": 1,
                    "_id": "testId2",
                    "__v": 0
                }
            ]);
        });
    });

    describe('showHabit', () => {
        test('it returns a user\'s habit with a 200 status code', async () => {
            jest.spyOn(User, 'findByUsername')
                .mockResolvedValue(new User({ id: 1, username: 'Test', hashed_password: "testPassword"}));
            jest.spyOn(Habit, 'getSpecificHabit')
                .mockResolvedValue({
                        "name": "Test1",
                        "dates": [
                            {
                                "date": "Test Date",
                                "complete": false
                            }
                        ],
                        "frequency": {
                            "daily": true,
                            "weekly": false
                        },
                        "createdAt": "Test",
                        "userID": 1,
                        "_id": "testId1",
                        "__v": 0
                    });
            const mockReq = { params: { username: 'Test', objectId: "testId1" } }
            await habitsController.showHabit(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith({
                    "name": "Test1",
                    "dates": [
                        {
                            "date": "Test Date",
                            "complete": false
                        }
                    ],
                    "frequency": {
                        "daily": true,
                        "weekly": false
                    },
                    "createdAt": "Test",
                    "userID": 1,
                    "_id": "testId1",
                    "__v": 0
                });
        });
    });

    describe('addNewHabit', () => {
        test('it returns users with a 201 status code', async () => {
            jest.spyOn(User, 'findByUsername')
                .mockResolvedValue(new User({ id: 1, username: 'Test', hashed_password: "testPassword"}));
            jest.spyOn(Habit, 'create')
                .mockResolvedValue({ 
                    name: 'Test',
                    dates: [{ 
                        date: "Test",
                        complete: false 
                    }],
                    frequency: { daily: true, weekly: false },
                    createdAt: 'Test',
                    userId : 1,
                    _id: "testId1",
                    __v: 0
                });
            const mockReq = { params: { username: 'Test'}, body: { habit: 'Test', dates: [{ date: "Test", complete: false }], frequency: { daily: true, weekly: false } } }
            await habitsController.addNewHabit(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith({ 
                name: 'Test',
                dates: [{ 
                    date: "Test",
                    complete: false 
                }],
                frequency: { daily: true, weekly: false },
                createdAt: 'Test',
                userId : 1,
                _id: "testId1",
                __v: 0
            })
        });
    });

    // describe('updateHabit', () => {
    //     test('it returns users with a 200 status code', async () => {
    //         jest.spyOn(User, 'findByUsername')
    //             .mockResolvedValue(new User({ id: 1, username: 'Test', hashed_password: "testPassword"}));
    //             jest.spyOn(User, 'findByUsername')
    //     });
    // });

    // describe('completeHabit', () => {
    //     test('it returns users with a 200 status code', async () => {
            
    //     });
    // });

    // describe('deleteHabit', () => {
    //     test('it returns users with a 200 status code', async () => {
            
    //     });
    // });
});
