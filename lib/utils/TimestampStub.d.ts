export declare class TimestampStub {
    seconds: number;
    nanoseconds: number;
    constructor(seconds: number, nanoseconds: number);
    static now(): TimestampStub;
    static fromDate(date: Date): TimestampStub;
    static fromMillis(milliseconds: number): TimestampStub;
    toDate(): Date;
    toMillis(): number;
    isEqual(other: TimestampStub): boolean;
    /** Returns a textual representation of this `Timestamp`. */
    toString(): string;
    valueOf(): string;
}
