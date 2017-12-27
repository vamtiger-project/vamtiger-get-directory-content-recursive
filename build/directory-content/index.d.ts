/// <reference types="node" />
import { PathLike } from 'fs';
export default class DirectoryContent {
    private absolutePath;
    private classified;
    directoryContent: DirectoryContentSet;
    directory: DirectoryContentSet;
    file: DirectoryContentSet;
    constructor(params: IParams);
    result(params: IResultParams): Promise<PathLike[] | {
        file: PathLike[];
        directory: PathLike[];
    }>;
    update(params: IUpdateParams): Promise<boolean | PathLike[] | {
        file: PathLike[];
        directory: PathLike[];
    }>;
}
export interface IParams {
    absolutePath: PathLike;
    classified: boolean;
}
export interface IResultParams {
    currentPath?: IParams['absolutePath'];
}
export interface IUpdateParams {
    parentDirecotry: IParams['absolutePath'];
    content: string;
}
export interface ClassifiedDirectoryContent {
    file: PathLike[];
    directory: PathLike[];
}
export declare type DirectoryContentSet = Set<PathLike>;
export declare type UnclassifiedDirectoryContent = PathLike[];
