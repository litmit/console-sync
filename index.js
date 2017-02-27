"use strict";

const fs = require("fs");
const util = require("util");


function log() // jshint validthis: true
{
   fs.writeSync(this._stdout.fd, util.format.apply(null,arguments) + "\n");
}

function error() // jshint validthis: true
{
   fs.writeSync(this._stderr.fd, util.format.apply(null,arguments) + "\n");
}

function dir(object, options) // jshint validthis: true
{
   options = Object.assign({customInspect: false}, options);
   fs.writeSync(this._stdout.fd, util.inspect(object, options) + "\n");
}

console.log = console.info = log;
console.error = console.warn = error;
console.dir = dir;


