'use strict';

var concatLogPieces = require('../lib/methods/concatLogPieces');

var FAKE_LOG_PIECES = [1, 2, 3];

var makeIllegalParamError = function(param) {
  return new Error('Illegal value for parameter: ' + param);
};

var makeMissingParamError = function(param) {
  return new Error('Missing required parameter: ' + param);
};

describe('concatLogPieces', function() {
  it('should convert an array into a space-delimited string when given no delimiter', function() {
    expect(concatLogPieces(FAKE_LOG_PIECES)).toBe('1 2 3');
  });

  it('should convert an array into a string, delimited by provided delimiter', function() {
    expect(concatLogPieces(FAKE_LOG_PIECES, '|')).toBe('1|2|3');
  });

  it('should throw an error when given logPieces of type other than Array', function() {
    expect(function() {
      concatLogPieces('1,2,3');
    }).toThrow(makeIllegalParamError('logPieces'));
  });

  it('should throw an error when given a delimiter of type other than String', function() {
    expect(function() {
      concatLogPieces(FAKE_LOG_PIECES, ['|']);
    }).toThrow(makeIllegalParamError('delimiter'));
  });

  it('should throw an error when missing logPieces', function() {
    expect(function() {
      concatLogPieces();
    }).toThrow(makeMissingParamError('logPieces'));
  });

});
