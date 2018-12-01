import { PathLike } from 'fs';
import { resolve as resolvePath } from 'path';
import getDirectoryContent from 'vamtiger-get-directory-content';
import getPathData from 'vamtiger-get-path-data';
import { IDirectoryContent, DirectoryContentSet, IResultParams, Result, IUpdateParams, ClassifiedDirectoryContent } from '.';

export default class DirectoryContent {
    private absolutePath: IDirectoryContent['params']['absolutePath'];
    private classified: IDirectoryContent['params']['classified'];
    public directoryContent: DirectoryContentSet;
    public directory: DirectoryContentSet;
    public file: DirectoryContentSet;

    constructor(params: IDirectoryContent['params']) {
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