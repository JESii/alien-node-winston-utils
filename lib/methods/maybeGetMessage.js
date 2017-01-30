'use strict';

const R = require('ramda');

/**
 * Get the message from the options or return an empty string.
 * @param {Object} options
 * @param {String} [options.message]
 * @returns {String}
 */
const maybeGetMessage = R.propOr('', 'message');

module.exports = maybeGetMessage;
