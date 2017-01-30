'use strict';

const R         = require('ramda'),
      Validator = require('o-validator');

const validateArgs = Validator.validateOrThrow({
  logPieces : Validator.required(R.is(Array)),
  delimiter : R.is(String)
});

/**
 * Joins log pieces into a space separated string
 * @param {Array} logPieces
 * @param {String} [delimiter]
 * @returns {string|*|String}
 */
const concatLogPieces = (logPieces, delimiter) => {
  validateArgs({
    logPieces : logPieces,
    delimiter : delimiter
  });
  return R.join(R.defaultTo(' ', delimiter), logPieces).trim();
};

module.exports = concatLogPieces;
