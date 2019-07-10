/**
 * @file Get an object's ES6 @@toStringTag.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring|19.1.3.6 Object.prototype.toString ( )}
 * @version 1.4.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-tag-x
 */
const nativeObjectToString = {}.toString;

/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */
export default function toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return nativeObjectToString.call(value);
}
