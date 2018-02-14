'use strict';

const R = require('ramda');

/**
 * Get metadata from options or return an empty string.
 * @param {Object} options
 * @param {Object} [options.meta]
 * @returns {String}
 */
const maybeGetMeta = options => {
  const metaData           = options.meta,
        keysCount          = R.compose(R.length, R.keys),
        metaKeysCount      = keysCount(metaData),
        optionsHasMetaData = R.gt(metaKeysCount, 0);

  return optionsHasMetaData
    ? '\n\t' + JSON.stringify(metaData)
    : '';
};

module.exports = maybeGetMeta;
