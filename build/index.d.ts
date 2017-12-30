/// <reference types="node" />
import { PathLike } from 'fs';
import { ClassifiedDirectoryContent } from './directory-content';
declare const _default: (params: IParams) => Promise<PathLike[] | ClassifiedDirectoryContent>;
export default _default;
export interface IParams {
    path: PathLike;
    classified?: boolean;
}
