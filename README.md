<a
  href="https://travis-ci.org/Xotic750/to-string-tag-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/to-string-tag-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/to-string-tag-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/to-string-tag-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/to-string-tag-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/to-string-tag-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/to-string-tag-x"
  title="npm version">
<img src="https://badge.fury.io/js/to-string-tag-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/to-string-tag-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/to-string-tag-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/to-string-tag-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/to-string-tag-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/to-string-tag-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/to-string-tag-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_to-string-tag-x"></a>

## to-string-tag-x

Get an object's ES6 @@toStringTag.

**See**: [19.1.3.6 Object.prototype.toString ( )](http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)  

<a name="exp_module_to-string-tag-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>string</code> ⏏

The `toStringTag` method returns "[object type]", where type is the
object type.

**Kind**: Exported function  
**Returns**: <code>string</code> - The object type string.

| Param | Type            | Description                                        |
| ----- | --------------- | -------------------------------------------------- |
| value | <code>\*</code> | The object of which to get the object type string. |

**Example**

```js
import toStringTag from 'to-string-tag-x';

console.log(toStringTag({})); // returns '[object Object]'
```
