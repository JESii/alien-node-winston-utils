'use strict';

const getLevel = require('../lib/methods/getLevel');

const FAKE_LEVEL = 'INFO';

const mockOptions = {
  level : FAKE_LEVEL
};

describe('getLevel', () => {
  it('gets the log level from the options object', () => {
    expect(getLevel(mockOptions)).toBe(FAKE_LEVEL);
  });
});
