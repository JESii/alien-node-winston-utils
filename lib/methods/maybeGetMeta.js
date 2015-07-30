'use strict';

var R = require('ramda');

/**
 * Get metadata from options or return an empty string.
 * @param {Object} options
 * @param {Object} [options.meta]
 * @returns {String}
 */
var maybeGetMeta = function(options) {
  var metaData           = R.prop('meta', options),
      keysCount          = R.compose(R.length, R.keys),
      metaKeysCount      = keysCount(metaData),
      optionsHasMetaData = R.gt(metaKeysCount, 0);

  return optionsHasMetaData
    ? '\n\t' + JSON.stringify(metaData)
    : '';
};

module.exports = maybeGetMeta;
