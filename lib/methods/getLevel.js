'use strict';

const R = require('ramda');

/**
 * Get the log level from the options.
 * @param {Object} options
 * @returns {String}
 */
const getLevel = R.compose(R.toUpper, R.prop('level'));

module.exports = getLevel;
