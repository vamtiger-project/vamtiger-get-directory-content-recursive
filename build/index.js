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
const directory_content_1 = require("./directory-content");
var directory_content_2 = require("./directory-content");
exports.DirectoryContent = directory_content_2.default;
exports.default = (params) => __awaiter(this, void 0, void 0, function* () {
    const absolutePath = params.path;
    const classified = params.classified ? true : false;
    const directoryContent = new directory_content_1.default({
        absolutePath,
        classified
    });
    const result = yield directoryContent.result();
    return result;
});
//# sourceMappingURL=index.js.map