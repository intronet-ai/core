// We can't import the firebase or firebase-admin libraries, as they conflict with client and admin
// implementations respectively. That is, we want a domain object that doesn't know about the
// underlying storage implementation. However, this raises some issues, we need to use timestamp
// data types (which differ between the client and admin packages). We therefore (somewhat clumsily)
// accept the timestamp class as a constructor argument, and use it to create timestamps. We then
// use this "fake" timestamp class for unit testing within this package. We may like to come back to
// this in future.

export class TimestampStub {
  constructor(public seconds: number, public nanoseconds: number) {}

  static now() {
    return new TimestampStub(0, 0);
  }

  static fromDate(date: Date) {
    return new TimestampStub(0, 0);
  }

  static fromMillis(milliseconds: number) {
    return new TimestampStub(0, 0);
  }

  toDate(): Date {
    return new Date();
  }

  toMillis() {
    return 0;
  }
  isEqual(other: TimestampStub) {
    return false;
  }
  /** Returns a textual representation of this `Timestamp`. */
  toString() {
    return '';
  }

  valueOf() {
    return '';
  }
}
