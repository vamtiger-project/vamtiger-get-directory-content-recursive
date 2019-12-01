/// <reference types="node" />
import { PathLike } from 'fs';
export interface IBaseParams {
    path: PathLike | string;
}
export interface IParamsUnclassified extends IBaseParams {
    classified?: false;
}
export interface IParamsClassified extends IBaseParams {
    classified: true;
}
export declare type Params = IParamsUnclassified | IParamsClassified;
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
export interface IClassifiedDirectoryContent {
    file: PathLike[];
    directory: PathLike[];
}
export declare type DirectoryContentSet = Set<PathLike>;
export declare type UnclassifiedDirectoryContent = PathLike[];
export declare type Result<P extends Params> = P extends IParamsUnclassified ? UnclassifiedDirectoryContent : P extends IParamsClassified ? IClassifiedDirectoryContent : unknown;
export { default as default } from './get-directory-content';
