/*jslint maxlen:80, es6:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:false, esnext:true, plusplus:true, maxparams:1, maxdepth:2,
  maxstatements:11, maxcomplexity:3 */

/*global JSON:true, expect, module, require, describe, it, returnExports */

(function () {
  'use strict';

  var hasSymbol = typeof Symbol === 'function' && typeof Symbol() === 'symbol',
    toStringTag;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham');
    if (typeof JSON === 'undefined') {
      JSON = {};
    }
    require('json3').runInContext(null, JSON);
    require('es6-shim');
    toStringTag = require('../../index.js');
  } else {
    toStringTag = returnExports;
  }

  describe('toStringTag', function () {
    it('primitives', function () {
      expect(toStringTag()).toBe('[object Undefined]');
      expect(toStringTag(undefined)).toBe('[object Undefined]');
      expect(toStringTag(null)).toBe('[object Null]');
      expect(toStringTag(1)).toBe('[object Number]');
      expect(toStringTag(true)).toBe('[object Boolean]');
      expect(toStringTag('x')).toBe('[object String]');
      if (hasSymbol) {
        expect(toStringTag(Symbol())).toBe('[object Symbol]');
      }
    });

    it('primitives as objects', function () {
      expect(toStringTag(Object(1))).toBe('[object Number]');
      expect(toStringTag(Object(true))).toBe('[object Boolean]');
      expect(toStringTag(Object('x'))).toBe('[object String]');
      if (hasSymbol) {
        expect(toStringTag(Object(Symbol()))).toBe('[object Symbol]');
      }
    });

    it('common objects', function () {
      expect(toStringTag([1, 2, 3])).toBe('[object Array]');
      expect(toStringTag({})).toBe('[object Object]');
      expect(toStringTag(describe)).toBe('[object Function]');
      expect(toStringTag(new Date())).toBe('[object Date]');
      expect(toStringTag(new Error('x'))).toBe('[object Error]');
    });
  });
}());
