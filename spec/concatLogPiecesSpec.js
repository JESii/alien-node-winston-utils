'use strict';

const concatLogPieces = require('../lib/methods/concatLogPieces');

const FAKE_LOG_PIECES = [1, 2, 3];

const makeIllegalParamError = param => new Error(`Validation Error: Illegal value for parameter "${param}"`);

const makeMissingParamError = param => new Error(`Validation Error: Missing required parameter "${param}"`);

describe('concatLogPieces', () => {
  it('converts an array into a space-delimited string when given no delimiter', () => {
    expect(concatLogPieces(FAKE_LOG_PIECES)).toBe('1 2 3');
  });

  it('converts an array into a string, delimited by provided delimiter', () => {
    expect(concatLogPieces(FAKE_LOG_PIECES, '|')).toBe('1|2|3');
  });

  it('throws an error when given logPieces of type other than Array', () => {
    expect(() => {
      concatLogPieces('1,2,3');
    }).toThrow(makeIllegalParamError('logPieces'));
  });

  it('throws an error when given a delimiter of type other than String', () => {
    expect(() => {
      concatLogPieces(FAKE_LOG_PIECES, ['|']);
    }).toThrow(makeIllegalParamError('delimiter'));
  });

  it('throws an error when missing logPieces', () => {
    expect(() => {
      concatLogPieces();
    }).toThrow(makeMissingParamError('logPieces'));
  });

});
