'use strict';

var getDateString = require('../lib/methods/getDateString');

describe('getDateString', function() {
  it('should return the current date timestamp as a string', function() {
    expect(getDateString()).toBe(new Date().toString());
  });
});
