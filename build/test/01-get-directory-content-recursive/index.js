"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const chai_1 = require("chai");
const __1 = require("../..");
const mock_data_1 = require("./mock-data");
const directory = path_1.resolve(__dirname, '..');
describe('get-directory-content-recursive should', function () {
    it('recursively return all content for a defined directory path', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const directoryContent = yield __1.default({
                path: directory
            });
            const validResult = mock_data_1.default.every(currentExpectedDirectoryContent => directoryContent.some(currentDirectoryContent => currentExpectedDirectoryContent === currentDirectoryContent));
            chai_1.expect(validResult).to.be.true;
        });
    });
});
//# sourceMappingURL=index.js.map