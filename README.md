# alien-node-winston-utils
Helper functions for Winston logging on NodeJS. The functions are pure and curried with Ramda.

[![Build Status](https://travis-ci.org/AlienCreations/alien-node-winston-utils.svg?branch=master)](https://travis-ci.org/AlienCreations/alien-node-winston-utils) [![Coverage Status](https://coveralls.io/repos/AlienCreations/alien-node-winston-utils/badge.svg?branch=master&service=github)](https://coveralls.io/github/AlienCreations/alien-node-winston-utils?branch=master) [![npm version](http://img.shields.io/npm/v/alien-node-winston-utils.svg)](https://npmjs.org/package/alien-node-winston-utils) [![Dependency Status](https://david-dm.org/AlienCreations/alien-node-winston-utils.svg)](https://david-dm.org/AlienCreations/alien-node-winston-utils)

## Install

```
$ npm install alien-node-winston-utils --save
```

Run the specs

```
$ npm test
```

## Usage

```js

// Example config file in Node
var loggerUtils = require('alien-node-winston-utils');

// ...

  logging : {
    winston : {
      transports : [
        {
          name          : 'console',
          level         : 'debug',
          timestamp     : loggerUtils.getDateString,
          colorize      : true,
          transportType : 'console'
        },
        {
          name             : 'file',
          level            : 'error',
          timestamp        : loggerUtils.getDateString,
          colorize         : true,
          transportType    : 'file',
          filename         : 'logs/activity.log',
          json             : false, // required for formatter to work
          formatter        : loggerUtils.getFormatter,
          handleExceptions : true,
          datePattern      : '.yyyy-MM-dd' // dictates how logs are rotated - more specific pattern rotates more often
        }
      ],
      strategies : {
        console : winston.transports.Console,
        file    : winston.transports.DailyRotateFile
      }
    }
  },
  
// ...

```

## Methods

#### getDateString
This is just a helper for Winston's `timestamp` option, which just returns `new Date().toString()`

#### getFormatter
This is the primary use of this library. As seen in the usage above, use it as a pointer reference. As seen in 
the TODO below, we will want to make this a true getter which accepts a template param. But for now, 
it works just fine. 

## TODO
 - Currently there is only one formatter. Allowing it to accept a decorator would be considerate. 
