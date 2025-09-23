"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemMessage = void 0;
exports.systemMessage = `You'll be given text from a user indicating what they are asking for help with. Usually, this is only one thing, but it may be multiple things. If it is multiple things, you should return an array of strings, each string representing one thing the user is asking for help with. If it is one thing, return an array wrapping that thing.

Example Input:
"Help with finding connections in the Singaporean startup scene; Help with finding a job in Singapore"

Example Output:
["finding connections in the Singaporean startup scene", "finding a job in Singapore"]

Input text may or may not be delimited by a semicolon character, and might not always be phrased as 'Help with...'.
`;
