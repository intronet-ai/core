"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firestore_1 = require("@google-cloud/firestore");
const challenge_1 = require("../challenge");
describe('Challenge', () => {
    describe('processLog', () => {
        // Given a new log, update the dates of the challenge if applicable.
        const uid = 'abc123';
        const date = firestore_1.Timestamp.fromDate(new Date('2023-03-28'));
        const challenge = new challenge_1.Challenge('id', {
            uid: 'abc123',
            createdAt: date,
            name: 'Wear the impulse button for 5 days',
            ordinal: 0,
            description: 'Do it',
            icon: 'test',
            days: 4,
            logEligibilityRequirements: {
                type: 'impulse',
            },
            eligibleLogDatesById: {},
            datesCumulativeProgress: {},
            currentDayCount: 0,
            isTemplate: false,
            consecutive: true,
        });
        describe('with an eligible log', () => {
            const log = {
                uid,
                createdAt: date,
                isDisplayable: true,
                startTime: date,
                timezone: 'America/Bogota',
                location: {
                    latitude: 1,
                    longitude: 1,
                },
                patternIds: [],
                locationIsFetching: false,
                type: 'impulse',
                outcome: 'indeterminate',
            };
            it('returns the log date to the challenge', () => {
                const result = challenge.processLog('def456', log);
                expect(result).toEqual({
                    eligibleLogDatesById: { def456: '2023-03-27' },
                });
            });
        });
        describe('with an ineligible log', () => {
            const log = {
                uid,
                createdAt: date,
                isDisplayable: true,
                startTime: date,
                timezone: 'America/Bogota',
                location: {
                    latitude: 1,
                    longitude: 1,
                },
                locationIsFetching: false,
                type: 'tactic',
                tactic: {},
            };
            it('returns the eligibleLogDatesById object, unchanged', () => {
                const result = challenge.processLog('def456', log);
                expect(result).toEqual({
                    eligibleLogDatesById: {},
                });
            });
        });
    });
    describe('recalculateProgress', () => {
        describe('with a set of dates', () => {
            const date = firestore_1.Timestamp.fromDate(new Date('2023-03-25'));
            const challenge = new challenge_1.Challenge('id', {
                uid: 'abc123',
                createdAt: date,
                name: 'Wear the impulse button for 5 days',
                ordinal: 0,
                description: 'Do it',
                icon: 'test',
                days: 4,
                logEligibilityRequirements: {
                    type: 'impulse',
                },
                dailyMinimum: 1,
                eligibleLogDatesById: {
                    abc123: '2023-03-25',
                    def456: '2023-03-26',
                },
                datesCumulativeProgress: {},
                currentDayCount: 0,
                consecutive: true,
                isTemplate: false,
            });
            it('writes the datesCumulativeProgress and currentDayCount properties', () => {
                const result = challenge.recalculateProgress();
                expect(result).toEqual({
                    countsByDate: {
                        '2023-03-24': 0,
                        '2023-03-25': 1,
                        '2023-03-26': 1,
                        '2023-03-27': 0,
                    },
                    datesCumulativeProgress: {
                        '2023-03-24': 0,
                        '2023-03-25': 1,
                        '2023-03-26': 2,
                        '2023-03-27': 0,
                    },
                    currentDayCount: 0,
                });
            });
        });
    });
});
