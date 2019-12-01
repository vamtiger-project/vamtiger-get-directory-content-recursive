/// <reference types="node" />
import { PathLike } from 'fs';
import { IDirectoryContent, DirectoryContentSet, IResultParams, IUpdateParams } from '.';
export default class DirectoryContent {
    private absolutePath;
    private classified;
    directoryContent: DirectoryContentSet;
    directory: DirectoryContentSet;
    file: DirectoryContentSet;
    constructor(params: IDirectoryContent['params']);
    result(params?: IResultParams): Promise<PathLike[] | {
        file: PathLike[];
        directory: PathLike[];
    }>;
    update(params: IUpdateParams): Promise<boolean | PathLike[] | {
        file: PathLike[];
        directory: PathLike[];
    }>;
}
