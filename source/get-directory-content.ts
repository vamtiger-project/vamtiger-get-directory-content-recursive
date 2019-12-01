import { default as DirectoryContent} from './directory-content';
import { Params, Result } from '.';

export default async function <P extends Params>(params: P) {
    const absolutePath = params.path;
    const classified = params.classified ? true : false;
    const directoryContent = new DirectoryContent({
        absolutePath,
        classified
    });
    const result = await directoryContent.result();

    return result as Result<P>;
}