/// <reference types="node" />
import { PathLike } from 'fs';
export interface IParams {
    path: PathLike;
    classified?: boolean;
}
export { ClassifiedDirectoryContent, UnclassifiedDirectoryContent } from './directory-content';
export { default as default } from './get-directory-content';
