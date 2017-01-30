'use strict';

const maybeGetMeta = require('../lib/methods/maybeGetMeta');

const FAKE_META = {
  foo : 'bar',
  baz : 'bat'
};

const FAKE_STRINGIFIED_META = '\n\t' + JSON.stringify(FAKE_META);

const mockOptionsWithMeta = {
  meta : FAKE_META
};

const mockOptionsWithoutMeta = {};

describe('maybeGetMeta', () => {

  it('gets the meta property off the options object if one exists', () => {
    expect(maybeGetMeta(mockOptionsWithMeta)).toBe(FAKE_STRINGIFIED_META);
  });

  it('returns an empty string if no meta object is provided', () => {
    expect(maybeGetMeta(mockOptionsWithoutMeta)).toBe('');
  });

});
