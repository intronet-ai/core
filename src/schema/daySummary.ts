export interface DaySummaryValue {
  isoDateString: string;
  patternIds: Array<string>;
  impulses: {
    [impulseId: string]: {
      patternId: string;
    };
  };
}
