import { PathLike } from 'fs';

export interface IParams {
    path: PathLike;
    classified?: boolean;
}

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

export interface ClassifiedDirectoryContent {
    file: PathLike[];
    directory: PathLike[];
}

export type DirectoryContentSet = Set<PathLike>;

export type UnclassifiedDirectoryContent = PathLike[];

export type Result = UnclassifiedDirectoryContent | ClassifiedDirectoryContent;

export { default as default } from './get-directory-content';