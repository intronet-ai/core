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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedMailTemplates = void 0;
const fs_1 = __importDefault(require("fs"));
const lodash_1 = require("lodash");
const path_1 = __importDefault(require("path"));
const DIR = path_1.default.join(__dirname, '../mailTemplates');
// The core library currently doesn't import firestore, but takes it as an injected dependency. It's
// simplest - though imprecise - to just use an any type here.
function seedMailTemplates(firestore) {
    return __awaiter(this, void 0, void 0, function* () {
        fs_1.default.readdir(DIR, (err, files) => {
            if (err)
                return console.error(err);
            files.forEach(file => {
                const filePath = path_1.default.join(DIR, file);
                const templateName = file.split('.')[0];
                fs_1.default.readFile(filePath, 'utf-8', (err, html) => {
                    var _a, _b;
                    if (filePath.includes('DS_Store'))
                        return;
                    if (err) {
                        return console.log({ err });
                    }
                    const subjectMatch = html.match(/<title>(.*)<\/title>/);
                    if (!subjectMatch)
                        throw new Error(`No subject found for ${templateName}`);
                    const subject = subjectMatch[1];
                    // We look for handlebar variable declarations, but exclude {{#each thing}}, and {{/each}}
                    const dataKeyRegexp = /{{([^\#\/]*?)}}/gm;
                    const detectedKeys = [...html.matchAll(dataKeyRegexp)].map(thing => thing[1]);
                    const excludedDataKeys = ((_b = (_a = html.match(/<!-- excludedKeys: (.*) -->/)) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.split(',')) || [];
                    const requiredDataKeys = (0, lodash_1.difference)(detectedKeys, excludedDataKeys);
                    firestore.collection('mailTemplates').doc(templateName).set({
                        subject,
                        html,
                        requiredDataKeys,
                    });
                });
            });
        });
    });
}
exports.seedMailTemplates = seedMailTemplates;
