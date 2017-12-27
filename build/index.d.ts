/// <reference types="node" />
import { PathLike } from 'fs';
declare const _default: (params: IParams) => Promise<PathLike[] | {
    file: PathLike[];
    directory: PathLike[];
}>;
export default _default;
export interface IParams {
    path: PathLike;
    classified?: boolean;
}
