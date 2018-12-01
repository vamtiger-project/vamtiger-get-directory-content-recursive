/// <reference types="node" />
import { PathLike } from 'fs';
export interface IParams {
    path: PathLike;
    classified?: boolean;
}
export interface IDirectoryContent {
    params: {
        absolutePath: PathLike;
        classified: boolean;
    };
}
export interface IResultParams {
    currentPath?: IDirectoryContent['params']['absolutePath'];
}
export interface IUpdateParams {
    parentDirecotry: IDirectoryContent['params']['absolutePath'];
    content: string;
}
export interface ClassifiedDirectoryContent {
    file: PathLike[];
    directory: PathLike[];
}
export declare type DirectoryContentSet = Set<PathLike>;
export declare type UnclassifiedDirectoryContent = PathLike[];
export declare type Result = UnclassifiedDirectoryContent | ClassifiedDirectoryContent;
export { default as default } from './get-directory-content';
