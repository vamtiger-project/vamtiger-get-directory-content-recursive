/// <reference types="node" />
import { PathLike } from 'fs';
export default class DirectoryContent {
    private absolutePath;
    private classified;
    directoryContent: DirectoryContentSet;
    directory: DirectoryContentSet;
    file: DirectoryContentSet;
    constructor(params: IParams);
    result(params?: IResultParams): Promise<Result>;
    update(params: IUpdateParams): Promise<boolean | PathLike[] | ClassifiedDirectoryContent>;
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
export declare type Result = UnclassifiedDirectoryContent | ClassifiedDirectoryContent;
