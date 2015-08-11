'use strict';

/**
 * Repair instances of native constructors.
 *
 * @param {Mixed} src Object or array source.
 * @returns {Mixed} Repaired source.
 * @api public
 */
module.exports = function repair(src) {
  Object.keys(src).forEach(function (key) {
    var t = {}.toString.call(src[key]).match(/\s([a-zA-Z]+)/)[1].toLowerCase();

    if ('object' === t || 'array' === t) return repair(src[key]);
    if ('regexp' === t) return src[key] = new RegExp(src[key]);
  });

  return src;
};