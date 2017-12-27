# VAMTIGER Bash
Get a list of all entries for a defined directory path and respective subdirectories.

## Installation
[VAMTIGER Get Directory Content Recursive](https://github.com/vamtiger-project/vamtiger-get-directory-content-recursive) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm install --save vamtiger-get-directory-content-recursive
```
or
```bash
yarn add vamtiger-get-directory-content-recursive
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Get Directory Content](https://github.com/vamtiger-project/vamtiger-get-directory-content-recursive-recursive):
```javascript
import getDirectoryContent from 'vamtiger-get-directory-content-recursive';
```
or
```javascript
const getDirectoryContent = require('vamtiger-get-directory-content-recursive').default;
```
Reference an array of file/directory entries for defined directory path:
```javascript
getDirectoryContent({
        path: 'some/directory/absolute/path'
    })
    .then(handleResult)
    .catch(handleError);
```
The result can also be referenced as an object with **_file_** and **_directory_** classification:
```javascript
getDirectoryContent({
        path: 'some/directory/absolute/path',
        classified: true
    })
    .then(handleResult)
    .catch(handleError);
```
Since [VAMTIGER Get Directory Content](https://github.com/vamtiger-project/vamtiger-get-directory-content-recursive-recursive) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), the result can be more conveniently referenced within an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function):
```javascript
async someAsyncFunction function() {
    const directoryContent = await getDirectoryContent({
        path: 'some/directory/absolute/path'
    });
}
```