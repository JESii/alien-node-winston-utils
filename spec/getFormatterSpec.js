'use strict';

var R = require('ramda');

var getFormatter    = require('../lib/methods/getFormatter'),
    getDateString   = require('../lib/methods/getDateString'),
    concatLogPieces = require('../lib/methods/concatLogPieces');

var FAKE_LOG_LEVEL              = 'DEBUG',
    FAKE_MESSAGE                = 'some message',
    FAKE_EMPTY_MESSAGE          = '',
    FAKE_META                   = {
      foo : 'bar',
      baz : 123
    },
    FAKE_STRINGIFIED_META       = '\n\t' + JSON.stringify(FAKE_META),
    FAKE_STRINGIFIED_EMPTY_META = '';

var fakeOptionsMinimal = {
  timestamp : getDateString,
  level     : FAKE_LOG_LEVEL
};

var fakeOptionsWithMessage = R.merge(fakeOptionsMinimal, {
  message : FAKE_MESSAGE
});

var fakeOptionsWithMeta = R.merge(fakeOptionsMinimal, {
  meta : FAKE_META
});

var fakeOptionsWithMessageAndMeta = R.merge(fakeOptionsWithMessage, fakeOptionsWithMeta);

var makeFakeExpectedMinimalLog = function() {
  return concatLogPieces([
    new Date().toString(),
    FAKE_LOG_LEVEL,
    FAKE_EMPTY_MESSAGE,
    FAKE_STRINGIFIED_EMPTY_META
  ]);
};

var makeFakeExpectedLogWithMessage = function() {
  return concatLogPieces([
    new Date().toString(),
    FAKE_LOG_LEVEL,
    FAKE_MESSAGE,
    FAKE_STRINGIFIED_EMPTY_META
  ]);
};

var makeFakeExpectedLogWithMeta = function() {
  return concatLogPieces([
    new Date().toString(),
    FAKE_LOG_LEVEL,
    FAKE_EMPTY_MESSAGE,
    FAKE_STRINGIFIED_META
  ]);
};

var makeFakeExpectedLogWithMessageAndMeta = function() {
  return concatLogPieces([
    new Date().toString(),
    FAKE_LOG_LEVEL,
    FAKE_MESSAGE,
    FAKE_STRINGIFIED_META
  ]);
};

describe('getFormatter', function() {

  it('should format a minimal log given basic required options', function() {
    expect(getFormatter(fakeOptionsMinimal)).toBe(makeFakeExpectedMinimalLog());
  });

  it('should format a log given options which includes a message', function() {
    expect(getFormatter(fakeOptionsWithMessage)).toBe(makeFakeExpectedLogWithMessage());
  });

  it('should format a log given options which includes metadata', function() {
    expect(getFormatter(fakeOptionsWithMeta)).toBe(makeFakeExpectedLogWithMeta());
  });

  it('should format a log given options which includes both a message and metadata', function() {
    expect(getFormatter(fakeOptionsWithMessageAndMeta)).toBe(makeFakeExpectedLogWithMessageAndMeta());
  });

});
