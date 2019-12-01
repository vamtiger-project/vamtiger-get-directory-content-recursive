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
const path_1 = require("path");
const vamtiger_get_directory_content_1 = require("vamtiger-get-directory-content");
const vamtiger_get_path_data_1 = require("vamtiger-get-path-data");
class DirectoryContent {
    constructor(params) {
        this.absolutePath = params.absolutePath;
        this.classified = params.classified;
        this.directoryContent = new Set();
        this.directory = new Set();
        this.file = new Set();
    }
    result(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentPath = params && params.currentPath ? params.currentPath : this.absolutePath;
            const directoryContent = yield vamtiger_get_directory_content_1.default(currentPath);
            const updated = yield Promise.all(directoryContent.map(content => this.update({
                parentDirecotry: currentPath,
                content
            })));
            const done = updated.every(updateStatus => updateStatus === true);
            const recursiveDirectoryContent = this.classified ?
                {
                    file: Array.from(this.file),
                    directory: Array.from(this.directory)
                }
                :
                    Array.from(this.directoryContent);
            return recursiveDirectoryContent;
        });
    }
    update(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const parentDirecotry = params.parentDirecotry;
            const content = params.content;
            const contentPath = path_1.resolve(parentDirecotry, content);
            const pathData = yield vamtiger_get_path_data_1.default(contentPath);
            let updating;
            this.directoryContent.add(contentPath);
            if (pathData.isDirectory()) {
                this.directory.add(contentPath);
                updating = this.result({
                    currentPath: contentPath
                });
            }
            else {
                this.file.add(contentPath);
                updating = Promise.resolve(true);
            }
            return updating;
        });
    }
}
exports.default = DirectoryContent;
//# sourceMappingURL=directory-content.js.map