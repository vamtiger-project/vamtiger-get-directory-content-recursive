import { Params, Result } from '.';
export default function <P extends Params>(params: P): Promise<Result<P>>;
