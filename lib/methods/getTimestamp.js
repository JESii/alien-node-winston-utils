'use strict';

const R = require('ramda');

/**
 * Get the timestamp from the options.
 * @param {Object} options
 * @returns {*}
 */
const getTimestamp = R.invoker(0, 'timestamp');

module.exports = getTimestamp;
