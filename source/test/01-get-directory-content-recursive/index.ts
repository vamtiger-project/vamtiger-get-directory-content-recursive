import { PathLike } from 'fs';
import { resolve as resolvePath } from 'path';
import { expect } from 'chai';
import getDirectoryContent from '../..';
import { UnclassifiedDirectoryContent } from '../../directory-content';
import expectedDirectoryContent from './mock-data';

const directory = resolvePath(
    __dirname,
    '..'
);

describe('get-directory-content-recursive should', function () {
    it('recursively return all content for a defined directory path', async function () {
        const directoryContent = await getDirectoryContent({
            path: directory
        }) as UnclassifiedDirectoryContent;
        const validResult = expectedDirectoryContent.every(currentExpectedDirectoryContent => directoryContent.some(currentDirectoryContent => currentExpectedDirectoryContent === currentDirectoryContent))

        expect(validResult).to.be.true;
    })
})