/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/to-string-tag-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/to-string-tag-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/to-string-tag-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/to-string-tag-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/to-string-tag-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/to-string-tag-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/to-string-tag-x" title="npm version">
 * <img src="https://badge.fury.io/js/to-string-tag-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * Get an object's @@toStringTag. Includes fixes to correct ES3 differences
 * for the following.
 * - undefined => '[object Undefined]'
 * - null => '[object Null]'
 * No other fixes are included, so legacy `arguments` will
 * give `[object Object]`, and many older native objects
 * give `[object Object]`. There are also other environmental bugs
 * for example `RegExp` gives `[object Function]` and `Uint8Array`
 * gives `[object Object]` on certain engines. While these and more could
 * be fixed, it was decided that this should be a very raw version and it
 * is left to the coder to use other `is` implimentations for detection.
 * It is also woth that as of ES6 `Symbol.toStringTag` can be set on object
 * and can report any string that it wishes.
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-tag-x
 */

/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:1, maxdepth:1,
  maxstatements:11, maxcomplexity:6 */

/*global module */

;(function () {
  'use strict';

  var pToString = Object.prototype.toString,
    ES = require('es-abstract/es6');

  /**
   * The `toStringTag` method returns "[object type]", where type is the
   * object type.
   *
   * @param {*} value The object of which to get the object type string.
   * @return {string} The object type string.
   * @example
   * var o = new Object();
   *
   * toStringTag(o); // returns '[object Object]'
   */
  module.exports = function toStringTag(value) {
    if (value === null) {
      return '[object Null]';
    }
    if (typeof value === 'undefined') {
      return '[object Undefined]';
    }
    return ES.Call(pToString, value);
  };
}());
