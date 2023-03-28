import { ChallengeValue } from '../schema';
import { LogValue } from '../schema/logs';
export declare class Challenge {
    private id;
    private data;
    constructor(id: string, data: ChallengeValue);
    processLog(logId: string, log: LogValue): {
        eligibleLogDatesById: {
            [key: string]: string;
        };
    };
    recalculateProgress(): {
        datesCumulativeProgress: Record<string, number>;
        currentDayCount: number;
    };
    private isLogEligible;
    private addlogDate;
    private removelogDate;
    private isDayLogCountEligible;
    private countsByDate;
}
