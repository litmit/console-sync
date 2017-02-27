# console-sync
> Node.js synchronous console

## Installation

```shell
npm install console-sync
```

## Usage

    require("console-sync"); // patch console object

    console.log("now this call do synchronous output");


## Overview

   Because console is asynchronous the following `sample.js`
```js
for(var i=0; ;++i)
{
   console.log("Value of i=%d",i);
}
```
will consume all available memory and crash after several minutes of execution
with message:
 
`FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory`


See this [issue](https://github.com/nodejs/node/issues/3524) for details.

For Node.js v4.x it was workaround: redirect a output to a file.

```shell
node sample.js > sample.out
```
This works perfectly and allows to output a large amount of information using `console.log()` 
in a synchronous application without any unneeded asynchronous complexity.

But this workaround not work at all for Node.js v6.x.


I publish [issue](https://github.com/nodejs/node/issues/11568) with request for fix this behavior.


But meanwhile possible to patch the `console` module using this package. 


`require("console-sync");` replace `log`,`info`,`warn`,`error` and `dir` methods with synchronous
analogs.

