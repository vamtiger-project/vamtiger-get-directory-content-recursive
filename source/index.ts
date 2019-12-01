import { PathLike } from 'fs';

export interface IBaseParams {
    path: PathLike | string;
}
export interface IParamsUnclassified extends IBaseParams{
    classified?: false;
}

export interface IParamsClassified extends IBaseParams{
    classified: true;
}

export type Params = IParamsUnclassified | IParamsClassified;

export interface IDirectoryContent {
    params: {
        absolutePath: PathLike;
        classified: boolean;
    }
}

export interface IResultParams{
    currentPath?: IDirectoryContent['params']['absolutePath'];
}

export interface IUpdateParams{
    parentDirecotry: IDirectoryContent['params']['absolutePath'];
    content: string;
}

export interface IClassifiedDirectoryContent {
    file: PathLike[];
    directory: PathLike[];
}

export type DirectoryContentSet = Set<PathLike>;

export type UnclassifiedDirectoryContent = PathLike[];

export type Result<P extends Params> = P extends IParamsUnclassified ? UnclassifiedDirectoryContent
    : P extends IParamsClassified ? IClassifiedDirectoryContent
    : unknown;

export { default as default } from './get-directory-content';