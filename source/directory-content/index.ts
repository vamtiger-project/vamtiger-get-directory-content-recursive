import { PathLike } from 'fs';
import { resolve as resolvePath } from 'path';
import getDirectoryContent from 'vamtiger-get-directory-content';
import getPathData from 'vamtiger-get-path-data';

export default class DirectoryContent {
    private absolutePath: IParams['absolutePath'];
    private classified: IParams['classified'];
    public directoryContent: DirectoryContentSet;
    public directory: DirectoryContentSet;
    public file: DirectoryContentSet;

    constructor(params: IParams) {
         this.absolutePath = params.absolutePath;
         this.classified = params.classified;
         this.directoryContent = new Set();
         this.directory = new Set();
         this.file = new Set();
    }

    async result(params?: IResultParams) {
        const currentPath = params && params.currentPath ? params.currentPath : this.absolutePath;
        const directoryContent = await getDirectoryContent(currentPath);
        const updated = await Promise.all(directoryContent.map(content => this.update({
            parentDirecotry: currentPath,
            content
        })));
        const done = updated.every(updateStatus => updateStatus === true);
        const recursiveDirectoryContent: Result = this.classified ?
            {
                file: Array.from(this.file),
                directory: Array.from(this.directory)
            }
            :
            Array.from(this.directoryContent);

        return recursiveDirectoryContent;
    }

    async update(params: IUpdateParams) {
        const parentDirecotry = params.parentDirecotry;
        const content = params.content;
        const contentPath = resolvePath(
            parentDirecotry as string,
            content
        );
        const pathData = await getPathData(contentPath);

        let updating;

        this.directoryContent.add(contentPath);

        if (pathData.isDirectory()) {
            this.directory.add(contentPath);

            updating = this.result({
                currentPath: contentPath
            });
        } else {
            this.file.add(contentPath);

            updating = Promise.resolve(true);
        }

        return updating;
    }
}

export interface IParams {
    absolutePath: PathLike;
    classified: boolean;
}

export interface IResultParams{
    currentPath?: IParams['absolutePath'];
}

export interface IUpdateParams{
    parentDirecotry: IParams['absolutePath'];
    content: string;
}

export interface ClassifiedDirectoryContent {
    file: PathLike[];
    directory: PathLike[];
}

export type DirectoryContentSet = Set<PathLike>;

export type UnclassifiedDirectoryContent = PathLike[];

export type Result = UnclassifiedDirectoryContent | ClassifiedDirectoryContent;