"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedE2EExampleData = exports.seedForTests = exports.seedMailTemplates = void 0;
const factories_1 = require("../factories");
const mailTemplates_1 = require("./mailTemplates");
Object.defineProperty(exports, "seedMailTemplates", { enumerable: true, get: function () { return mailTemplates_1.seedMailTemplates; } });
// Seed the minimum required data to run e2e tests
function seedForTests(firestore) {
    return Promise.all([(0, mailTemplates_1.seedMailTemplates)(firestore)]);
}
exports.seedForTests = seedForTests;
// Seed additional data to run through example cases - an example community, responses, etc
function seedE2EExampleData(firestore, TimestampKlass) {
    return __awaiter(this, void 0, void 0, function* () {
        const email = 'test@intronet.ai';
        const { communityFactory, responseFactory, assessmentFactory } = (0, factories_1.makeFactories)(TimestampKlass);
        const community = yield firestore
            .collection('communities')
            .add(communityFactory.build({ name: 'Example Community' }));
        const responses = yield Promise.all([
            firestore
                .collection('responses')
                .add(responseFactory.build({ email, communityId: community.id })),
            firestore
                .collection('responses')
                .add(responseFactory.build({ communityId: community.id })),
        ]);
        yield firestore.collection('assessments').add(assessmentFactory.build({
            seekerResponseId: responses[0].id,
            providerResponseId: responses[1].id,
            isSelected: true,
        }));
    });
}
exports.seedE2EExampleData = seedE2EExampleData;
