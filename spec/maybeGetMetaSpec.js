'use strict';

var maybeGetMeta = require('../lib/methods/maybeGetMeta');

var FAKE_META = {
  foo : 'bar',
  baz : 'bat'
};

var FAKE_STRINGIFIED_META = '\n\t' + JSON.stringify(FAKE_META);

var mockOptionsWithMeta = {
  meta : FAKE_META
};

var mockOptionsWithoutMeta = {};

describe('maybeGetMeta', function() {

  it('should get the meta property off the options object if one exists', function() {
    expect(maybeGetMeta(mockOptionsWithMeta)).toBe(FAKE_STRINGIFIED_META);
  });

  it('should return an empty string if no meta object is provided', function() {
    expect(maybeGetMeta(mockOptionsWithoutMeta)).toBe('');
  });

});
