import { default as DirectoryContent} from './directory-content';
import { IParams, ClassifiedDirectoryContent } from '.';

export default async function (params: IParams) {
    const absolutePath = params.path;
    const classified = params.classified ? true : false;
    const directoryContent = new DirectoryContent({
        absolutePath,
        classified
    });
    const result = await directoryContent.result();

    return result;
}