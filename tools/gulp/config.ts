import { getDirs } from './helper';

const source = 'src';

export const sourcePaths = getDirs(source);
export const rootPaths = getDirs('.');
