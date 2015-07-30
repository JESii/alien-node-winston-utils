'use strict';

var maybeGetMessage = require('../lib/methods/maybeGetMessage');

var FAKE_MESSAGE = 'foo';

var mockOptionsWithMessage = {
  message : FAKE_MESSAGE
};

var mockOptionsWithoutMessage = {};

describe('maybeGetMessage', function() {

  it('should get a message off the options object if one exists', function() {
    expect(maybeGetMessage(mockOptionsWithMessage)).toBe(FAKE_MESSAGE)
  });

  it('should return an empty string if no message is on the options object', function() {
    expect(maybeGetMessage(mockOptionsWithoutMessage)).toBe('');
  });

});
