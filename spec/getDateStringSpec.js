'use strict';

const getDateString = require('../lib/methods/getDateString');

describe('getDateString', () => {
  it('should return the current date timestamp as a string', () => {
    expect(getDateString()).toBe(Date());
  });
});
