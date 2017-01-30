'use strict';

const getTimestamp = require('../lib/methods/getTimestamp.js');

const FAKE_TIMESTAMP = 'foo';

const mockOptions = {
  timestamp : () => {
    return FAKE_TIMESTAMP;
  }
};

describe('getTimestamp', () => {
  it('invokes the timestamp function on the options object', () => {
    expect(getTimestamp(mockOptions)).toBe(FAKE_TIMESTAMP);
  });
});
