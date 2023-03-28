import { Timestamp } from '@google-cloud/firestore';
import { ImpulseLogValue } from '../../schema';
import { LogValue } from '../../schema/logs';
import { Challenge } from '../challenge';

describe('Challenge', () => {
  describe('processLog', () => {
    // Given a new log, update the dates of the challenge if applicable.
    const uid = 'abc123';
    const date = Timestamp.fromDate(new Date('2023-03-28'));
    const challenge = new Challenge('id', {
      uid: 'abc123',
      createdAt: date,
      name: 'Wear the impulse button for 5 days',
      ordinal: 0,
      description: 'Do it',
      icon: 'test',
      patternId: 'abc123',
      days: 4,
      logEligibilityRequirements: {
        type: 'impulse',
      },
      eligibleLogDatesById: {},
      datesCumulativeProgress: {},
      currentDayCount: 0,
    });
    describe('with an eligible log', () => {
      const log: ImpulseLogValue = {
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
      const log: LogValue = {
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
        tactic: {} as any,
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
      const date = Timestamp.fromDate(new Date('2023-03-28'));
      const challenge = new Challenge('id', {
        uid: 'abc123',
        createdAt: date,
        name: 'Wear the impulse button for 5 days',
        ordinal: 0,
        description: 'Do it',
        icon: 'test',
        patternId: 'abc123',
        days: 4,
        logEligibilityRequirements: {
          type: 'impulse',
        },
        eligibleLogDatesById: {},
        datesCumulativeProgress: {},
        currentDayCount: 0,
      });

      it('writes the datesCumulativeProgress and currentDayCount properties', () => {
        const result = challenge.recalculateProgress();
        expect(result).toEqual({
          datesCumulativeProgress: {},
          currentDayCount: 1,
        });
      });
    });
  });
});
