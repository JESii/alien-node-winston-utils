'use strict';

var R = require('ramda');

/**
 * Get the message from the options or return an empty string.
 * @param {Object} options
 * @param {String} [options.message]
 * @returns {String}
 */
var maybeGetMessage = function(options) {
  return R.propOr('', 'message', options);
};

module.exports = maybeGetMessage;
