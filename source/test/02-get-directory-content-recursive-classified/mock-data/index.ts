import { resolve as resolvePath } from 'path';

const parentDirectory = resolvePath(
    __dirname,
    '..'
);

export default [
    `${parentDirectory}`,
    `${parentDirectory}/index.d.ts`,
    `${parentDirectory}/index.js`,
    `${parentDirectory}/index.js.map`,
    `${parentDirectory}/mock-data`,
    `${parentDirectory}/mock-data/index.d.ts`,
    `${parentDirectory}/mock-data/index.js`,
    `${parentDirectory}/mock-data/index.js.map`
];