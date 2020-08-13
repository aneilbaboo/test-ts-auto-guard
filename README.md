# test-ts-auto-guard


```shell
export PATH=node_modules/.bin:$PATH
git clone git@github.com:aneilbaboo/test-ts-auto-guard.git
cd test-ts-auto-guard
yarn 
ts-auto-guard
```

Gives the following error:
```shell
(node:11410) UnhandledPromiseRejectionWarning: TypeError: realpath is not a function
    at visitDirectory (/Users/aneil/code/other/junk/test-ts-auto-guard/node_modules/typescript/lib/typescript.js:18327:45)
    at Object.matchFiles (/Users/aneil/code/other/junk/test-ts-auto-guard/node_modules/typescript/lib/typescript.js:18323:13)
    at Object.matchFiles (/Users/aneil/code/other/junk/test-ts-auto-guard/node_modules/ts-simple-ast/dist/typescript/tsInternal.js:7:35)
    at Object.readDirectory (/Users/aneil/code/other/junk/test-ts-auto-guard/node_modules/ts-simple-ast/dist/utils/compiler/readDirectory.js:16:27)
    at Object.readDirectory (/Users/aneil/code/other/junk/test-ts-auto-guard/node_modules/ts-simple-ast/dist/utils/tsconfig/getTsParseConfigHost.js:11:37)
    at getFileNamesFromConfigSpecs (/Users/aneil/code/other/junk/test-ts-auto-guard/node_modules/typescript/lib/typescript.js:29196:40)
    at matchFileNames (/Users/aneil/code/other/junk/test-ts-auto-guard/node_modules/typescript/lib/typescript.js:29116:16)
    at getFileNames (/Users/aneil/code/other/junk/test-ts-auto-guard/node_modules/typescript/lib/typescript.js:28665:26)
    at parseJsonConfigFileContentWorker (/Users/aneil/code/other/junk/test-ts-auto-guard/node_modules/typescript/lib/typescript.js:28597:18)
    at Object.parseJsonConfigFileContent (/Users/aneil/code/other/junk/test-ts-auto-guard/node_modules/typescript/lib/typescript.js:28544:16)
(node:11410) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
(node:11410) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
✨  Done in 2.98s.
```
