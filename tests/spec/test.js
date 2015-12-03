/*jslint maxlen:80, es6:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:true, plusplus:true, maxparams:1, maxdepth:1,
  maxstatements:15, maxcomplexity:4 */

/*global expect, module, require, describe, it, returnExports, Buffer,
  Float32Array, Float64Array, Int8Array, Int16Array, Int32Array, Uint8Array,
  Uint8ClampedArray, Uint16Array, Uint32Array */

(function () {
  'use strict';

  var hasSymbol = typeof Symbol === 'function' && typeof Symbol() === 'symbol',
    hasBuffer = typeof Buffer === 'function',
    hasArrayBuffer = typeof hasArrayBuffer === 'function',
    hasUint8ClampedArray = hasArrayBuffer &&
      typeof Uint8ClampedArray === 'function',
    toStringTag;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
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
      expect(toStringTag(arguments)).toBe('[object Arguments]');
      expect(toStringTag({})).toBe('[object Object]');
      expect(toStringTag(describe)).toBe('[object Function]');
      expect(toStringTag(/x/)).toBe('[object RegExp]');
      expect(toStringTag(new Date())).toBe('[object Date]');
      expect(toStringTag(new Error('x'))).toBe('[object Error]');
    });

    it('common exotic objects', function () {
      if (hasBuffer) {
        expect(toStringTag(new Buffer(4))).toBe('[object Uint8Array]');
      }
      if (hasArrayBuffer) {
        expect(toStringTag(new ArrayBuffer(4))).toBe('[object ArrayBuffer]');
        expect(toStringTag(new Float32Array(4))).toBe('[object Float32Array]');
        expect(toStringTag(new Float64Array(4))).toBe('[object Float64Array]');
        expect(toStringTag(new Int8Array(4))).toBe('[object Int8Array]');
        expect(toStringTag(new Int16Array(4))).toBe('[object Int16Array]');
        expect(toStringTag(new Int32Array(4))).toBe('[object Int32Array]');
        expect(toStringTag(new Uint8Array(4))).toBe('[object Uint8Array]');
        expect(toStringTag(new Uint16Array(4))).toBe('[object Uint16Array]');
        expect(toStringTag(new Uint32Array(4))).toBe('[object Uint32Array]');
      }
      if (hasUint8ClampedArray) {
        expect(toStringTag(new Uint8ClampedArray(4)))
          .toBe('[object Uint8ClampedArray]');
      }
    });
  });
}());
