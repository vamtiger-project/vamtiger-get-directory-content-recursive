/// <reference types="node" />
import { PathLike } from 'fs';
import { IDirectoryContent, DirectoryContentSet, IResultParams, Result, IUpdateParams, ClassifiedDirectoryContent } from '.';
export default class DirectoryContent {
    private absolutePath;
    private classified;
    directoryContent: DirectoryContentSet;
    directory: DirectoryContentSet;
    file: DirectoryContentSet;
    constructor(params: IDirectoryContent['params']);
    result(params?: IResultParams): Promise<Result>;
    update(params: IUpdateParams): Promise<boolean | PathLike[] | ClassifiedDirectoryContent>;
}
