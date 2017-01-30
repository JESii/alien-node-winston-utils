'use strict';

const R = require('ramda');

const getFormatter    = require('../lib/methods/getFormatter'),
      getDateString   = require('../lib/methods/getDateString'),
      concatLogPieces = require('../lib/methods/concatLogPieces');

const FAKE_LOG_LEVEL              = 'DEBUG',
      FAKE_MESSAGE                = 'some message',
      FAKE_EMPTY_MESSAGE          = '',
      FAKE_META                   = {
        foo : 'bar',
        baz : 123
      },
      FAKE_STRINGIFIED_META       = '\n\t' + JSON.stringify(FAKE_META),
      FAKE_STRINGIFIED_EMPTY_META = '';

const fakeOptionsMinimal = {
  timestamp : getDateString,
  level     : FAKE_LOG_LEVEL
};

const fakeOptionsWithMessage = R.merge(fakeOptionsMinimal, {
  message : FAKE_MESSAGE
});

const fakeOptionsWithMeta = R.merge(fakeOptionsMinimal, {
  meta : FAKE_META
});

const fakeOptionsWithMessageAndMeta = R.merge(fakeOptionsWithMessage, fakeOptionsWithMeta);

const makeFakeExpectedMinimalLog = () => {
  return concatLogPieces([
    Date(),
    FAKE_LOG_LEVEL,
    FAKE_EMPTY_MESSAGE,
    FAKE_STRINGIFIED_EMPTY_META
  ]);
};

const makeFakeExpectedLogWithMessage = () => {
  return concatLogPieces([
    Date(),
    FAKE_LOG_LEVEL,
    FAKE_MESSAGE,
    FAKE_STRINGIFIED_EMPTY_META
  ]);
};

const makeFakeExpectedLogWithMeta = () => {
  return concatLogPieces([
    Date(),
    FAKE_LOG_LEVEL,
    FAKE_EMPTY_MESSAGE,
    FAKE_STRINGIFIED_META
  ]);
};

const makeFakeExpectedLogWithMessageAndMeta = () => {
  return concatLogPieces([
    Date(),
    FAKE_LOG_LEVEL,
    FAKE_MESSAGE,
    FAKE_STRINGIFIED_META
  ]);
};

describe('getFormatter', () => {

  it('formats a minimal log given basic required options', () => {
    expect(getFormatter(fakeOptionsMinimal)).toBe(makeFakeExpectedMinimalLog());
  });

  it('formats a log given options which includes a message', () => {
    expect(getFormatter(fakeOptionsWithMessage)).toBe(makeFakeExpectedLogWithMessage());
  });

  it('formats a log given options which includes metadata', () => {
    expect(getFormatter(fakeOptionsWithMeta)).toBe(makeFakeExpectedLogWithMeta());
  });

  it('formats a log given options which includes both a message and metadata', () => {
    expect(getFormatter(fakeOptionsWithMessageAndMeta)).toBe(makeFakeExpectedLogWithMessageAndMeta());
  });

});
