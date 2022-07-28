const Habit = require('../../../models/Habit');
const connection = require("..//../../dbConfig/mongo/connection");

const mongoose = require('mongoose');
jest.mock('mongoose');

describe('User', () => {
    beforeEach(() => jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('getUsersHabits static function', () => {
        test('it resolves with user\'s habits on successful db query', async () => {
            jest.spyOn(Habit, 'find')
                .mockResolvedValueOnce([{}, {}]);
            const usersHabits = await Habit.getUsersHabits(1);
            expect(usersHabits).toHaveLength(2);
        });
    });

    describe('getSpecificHabit static function', () => {
        test('it resolves with user\'s specific habit on successful db query', async () => {
            habitData = [{ name: 'Test', userID: 1 }]
            jest.spyOn(Habit, 'find')
                .mockResolvedValueOnce(habitData[0]);
            const usersHabits = await Habit.getSpecificHabit(1, 'Test');
            expect(usersHabits).toBeInstanceOf(Habit);
        });
    });
});