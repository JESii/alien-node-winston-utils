'use strict';

var R = require('ramda');

/**
 * Get the log level from the options.
 * @param {Object} options
 * @returns {String}
 */
var getLevel = function(options) {
  return R.compose(R.toUpper, R.prop('level'))(options)
};

module.exports = getLevel;
