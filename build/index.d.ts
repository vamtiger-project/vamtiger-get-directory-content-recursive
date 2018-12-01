/// <reference types="node" />
import { PathLike } from 'fs';
export { ClassifiedDirectoryContent } from './directory-content';
declare const _default: (params: IParams) => Promise<import("../../../../../../../Users/vamtiger/Documents/Programming/VamtigerProject/vamtiger-get-directory-content-recursive/source/directory-content").Result>;
export default _default;
export interface IParams {
    path: PathLike;
    classified?: boolean;
}
