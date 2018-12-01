import { PathLike } from 'fs';
import { default as DirectoryContent, ClassifiedDirectoryContent} from './directory-content';

export { default as DirectoryContent, ClassifiedDirectoryContent } from './directory-content';

export default async(params: IParams) => {
    const absolutePath = params.path;
    const classified = params.classified ? true : false;
    const directoryContent = new DirectoryContent({
        absolutePath,
        classified
    });
    const result = await directoryContent.result();

    return result;
}

export interface IParams {
    path: PathLike;
    classified?: boolean;
}