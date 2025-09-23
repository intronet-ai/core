"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withIdSchema = exports.withId = void 0;
const zod_1 = require("zod");
const firestore_1 = require("./firestore");
/**
 * Adds id and _ref properties to a document data object
 * This is used to match the WithId type from impulse-shared
 */
function withId(doc) {
    return Object.assign(Object.assign({}, doc.data()), { _ref: doc.ref, id: doc.id });
}
exports.withId = withId;
const withIdSchema = (schema) => zod_1.z
    .object({
    id: zod_1.z.string(),
    _ref: firestore_1.documentReferenceSchema,
})
    .and(schema);
exports.withIdSchema = withIdSchema;
