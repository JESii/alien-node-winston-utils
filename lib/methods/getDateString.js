'use strict';

/**
 * Get a JS Date string, used for a timestamp in the formatter.
 * @returns {String}
 */
var getDateString = function() {
  return new Date().toString();
};

module.exports = getDateString;
