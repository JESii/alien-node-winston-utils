'use strict';

var R = require('ramda');

var getTimestamp    = require('./getTimestamp'),
    getLevel        = require('./getLevel'),
    maybeGetMessage = require('./maybeGetMessage'),
    maybeGetMeta    = require('./maybeGetMeta');

/**
 * Get the format for the log.
 * @param {Object} options
 * @returns {String}
 */
var getFormatter = function(options) {
  return R.join(' ', [
    getTimestamp(options),
    getLevel(options),
    maybeGetMessage(options),
    maybeGetMeta(options)
  ]).trim();
};

module.exports = getFormatter;
