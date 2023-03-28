"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
const date_fns_1 = require("date-fns");
const lodash_1 = require("lodash");
const schema_1 = require("../schema");
// A challenge is for a user to track a certain number of eligible logs over a certain time period.
// Logs may be eligible based on the outcome, type, or both. For example, a user might have a
// challenge to wear the impulse button for 5 days. Or, they might have a challenge to go 30 days
// with no setbacks.
class Challenge {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
    // Challenges are updated when log entries are added. With every log entry, we call this method,
    // and have new properties for the challenge returned. If the log was not eligible for the
    // challenge, then the existing eligibleLogDatesById are returned unchanged. Otherwise, we return
    // a new object of dates, with the log's date added to it.
    processLog(logId, log) {
        const { eligibleLogDatesById } = this.data;
        return {
            eligibleLogDatesById: this.isLogEligible(log)
                ? this.addlogDate(eligibleLogDatesById, logId, log)
                : this.removelogDate(eligibleLogDatesById, logId),
        };
    }
    // This is run after every update to the quest that changes the dates by Id
    recalculateProgress() {
        const { createdAt } = this.data;
        const countsByDate = this.countsByDate();
        const startDate = createdAt.toDate();
        let endDate = new Date();
        let currentDayCount = 0;
        const datesCumulativeProgress = {};
        for (let i = startDate; (0, date_fns_1.isBefore)(i, endDate); i = (0, date_fns_1.addDays)(i, 1)) {
            const dateString = (0, date_fns_1.format)(i, schema_1.DATE_FORMAT);
            if (typeof countsByDate[dateString] !== 'number')
                countsByDate[dateString] = 0;
            const eligibile = this.isDayLogCountEligible(countsByDate[dateString]);
            currentDayCount = eligibile ? currentDayCount + 1 : 0;
            datesCumulativeProgress[dateString] = currentDayCount;
        }
        return { datesCumulativeProgress, currentDayCount };
    }
    isLogEligible(log) {
        const { outcome, type } = this.data.logEligibilityRequirements || {};
        if (type && type !== log.type)
            return false;
        if (outcome && outcome !== log.outcome)
            return false;
        return true;
    }
    // Add the log date to the object, indexed by its id
    addlogDate(eligibleLogDatesById, logId, log) {
        return Object.assign(Object.assign({}, eligibleLogDatesById), { [logId]: (0, date_fns_1.format)(log.startTime.toDate(), schema_1.DATE_FORMAT) });
    }
    // Remove the property of the object for this log's id
    removelogDate(eligibleLogDatesById, logId) {
        (0, lodash_1.unset)(eligibleLogDatesById, logId);
        return eligibleLogDatesById;
    }
    isDayLogCountEligible(count) {
        const { dailyMaximum, dailyMinimum } = this.data;
        if (dailyMaximum !== undefined && count > dailyMaximum)
            return false;
        if (dailyMinimum !== undefined && count < dailyMinimum)
            return false;
        return true;
    }
    // Get an object of counts of records by date
    countsByDate() {
        const { eligibleLogDatesById } = this.data;
        return (0, lodash_1.mapValues)((0, lodash_1.groupBy)(
        // TODO: clean this up?
        Object.keys(eligibleLogDatesById || {}).map(id => ({
            id,
            date: eligibleLogDatesById[id],
        })), 'date'), lodash_1.toLength);
    }
}
exports.Challenge = Challenge;
