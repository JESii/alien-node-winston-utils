'use strict';

var getTimestamp = require('../lib/methods/getTimestamp.js');

var FAKE_TIMESTAMP = 'foo';

var mockOptions = {
  timestamp : function() {
    return FAKE_TIMESTAMP;
  }
};

describe('getTimestamp', function() {
  it('should invoke the timestamp function on the options object', function() {
    expect(getTimestamp(mockOptions)).toBe(FAKE_TIMESTAMP);
  });
});
