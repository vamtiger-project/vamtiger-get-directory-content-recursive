import { PathLike, Stats } from 'fs';
import { resolve as resolvePath } from 'path';
import { expect } from 'chai';
import getPathData from 'vamtiger-get-path-data';
import getDirectoryContent from '../..';
import { ClassifiedDirectoryContent } from '../../directory-content';
import expectedDirectoryContent from './mock-data';

const directory = resolvePath(
    __dirname,
    '..'
);

describe('get-directory-content-recursive should', function () {
    it('recursively return all content for a defined directory path classified by file and directory', async function () {
        const directoryContent = await getDirectoryContent({
            path: directory,
            classified: true
        }) as ClassifiedDirectoryContent;
        const filePathData = await Promise
            .all(directoryContent.file.map(currentFile => getPathData(currentFile)));
        const directoryPathData = await Promise
            .all(directoryContent.directory.map(currentDirectory => getPathData(currentDirectory)));
        const validResult = expectedDirectoryContent.every(currentExpectedDirectoryContent => directoryContent.file.concat(directoryContent.directory).some(currentDirectoryContent => currentExpectedDirectoryContent === currentDirectoryContent));
        const validFileClassification = filePathData.every(pathData => pathData.isFile());
        const validDirectoryClassification = directoryPathData.every(pathData => pathData.isDirectory());

        expect(validResult).to.be.true;
        expect(validFileClassification).to.be.true;
        expect(validDirectoryClassification).to.be.true;
    })
})