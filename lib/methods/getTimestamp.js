'use strict';

var R = require('ramda');

/**
 * Get the timestamp from the options.
 * @param {Object} options
 * @returns {*}
 */
var getTimestamp = function(options) {
  return R.apply(R.prop('timestamp', options), options);
};

module.exports = getTimestamp;
