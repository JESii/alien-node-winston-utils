'use strict';

var getLevel = require('../lib/methods/getLevel');

var FAKE_LEVEL = 'INFO';

var mockOptions = {
  level : FAKE_LEVEL
};

describe('getLevel', function() {
  it('should get the log level from the options object', function() {
    expect(getLevel(mockOptions)).toBe(FAKE_LEVEL);
  });
});
