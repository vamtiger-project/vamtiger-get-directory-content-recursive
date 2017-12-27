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
const vamtiger_get_path_data_1 = require("vamtiger-get-path-data");
const __1 = require("../..");
const mock_data_1 = require("./mock-data");
const directory = path_1.resolve(__dirname, '..');
describe('get-directory-content-recursive should', function () {
    it('recursively return all content for a defined directory path classified by file and directory', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const directoryContent = yield __1.default({
                path: directory,
                classified: true
            });
            const filePathData = yield Promise
                .all(directoryContent.file.map(currentFile => vamtiger_get_path_data_1.default(currentFile)));
            const directoryPathData = yield Promise
                .all(directoryContent.directory.map(currentDirectory => vamtiger_get_path_data_1.default(currentDirectory)));
            const validResult = mock_data_1.default.every(currentExpectedDirectoryContent => directoryContent.file.concat(directoryContent.directory).some(currentDirectoryContent => currentExpectedDirectoryContent === currentDirectoryContent));
            const validFileClassification = filePathData.every(pathData => pathData.isFile());
            const validDirectoryClassification = directoryPathData.every(pathData => pathData.isDirectory());
            chai_1.expect(validResult).to.be.true;
            chai_1.expect(validFileClassification).to.be.true;
            chai_1.expect(validDirectoryClassification).to.be.true;
        });
    });
});
//# sourceMappingURL=index.js.map