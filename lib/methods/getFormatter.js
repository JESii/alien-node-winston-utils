'use strict';

const R = require('ramda');

const getTimestamp    = require('./getTimestamp'),
      getLevel        = require('./getLevel'),
      maybeGetMessage = require('./maybeGetMessage'),
      maybeGetMeta    = require('./maybeGetMeta');

/**
 * Get the format for the log.
 * @param {Object} options
 * @returns {String}
 */
const getFormatter = (options) => {
  return R.join(' ', [
    getTimestamp(options),
    getLevel(options),
    maybeGetMessage(options),
    maybeGetMeta(options)
  ]).trim();
};

module.exports = getFormatter;
