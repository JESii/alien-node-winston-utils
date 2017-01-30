'use strict';

const maybeGetMessage = require('../lib/methods/maybeGetMessage');

const FAKE_MESSAGE = 'foo';

const mockOptionsWithMessage = {
  message : FAKE_MESSAGE
};

const mockOptionsWithoutMessage = {};

describe('maybeGetMessage', () => {

  it('gets a message off the options object if one exists', () => {
    expect(maybeGetMessage(mockOptionsWithMessage)).toBe(FAKE_MESSAGE)
  });

  it('returns an empty string if no message is on the options object', () => {
    expect(maybeGetMessage(mockOptionsWithoutMessage)).toBe('');
  });

});
