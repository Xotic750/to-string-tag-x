<a name="module_to-string-tag-x"></a>
## to-string-tag-x
<a href="https://travis-ci.org/Xotic750/to-string-tag-x"
title="Travis status">
<img src="https://travis-ci.org/Xotic750/to-string-tag-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/to-string-tag-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/to-string-tag-x.svg"
alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/to-string-tag-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/to-string-tag-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/to-string-tag-x" title="npm version">
<img src="https://badge.fury.io/js/to-string-tag-x.svg"
alt="npm version" height="18">
</a>

Get an object's @@toStringTag. Includes fixes to correct ES3 differences
for the following.
- undefined => '[object Undefined]'
- null => '[object Null]'

No other fixes are included, so legacy `arguments` will
give `[object Object]`, and many older native objects
give `[object Object]`. There are also other environmental bugs
for example `RegExp` gives `[object Function]` and `Uint8Array`
gives `[object Object]` on certain engines. While these and more could
be fixed, it was decided that this should be a very raw version and it
is left to the coder to use other `is` implimentations for detection.
It is also woth that as of ES6 `Symbol.toStringTag` can be set on object
and can report any string that it wishes.

**Version**: 1.0.0  
**Author:** Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_to-string-tag-x--module.exports"></a>
### `module.exports(value)` ⇒ <code>string</code> ⏏
The `toStringTag` method returns "[object type]", where type is the
object type.

**Kind**: Exported function  
**Returns**: <code>string</code> - The object type string.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The object of which to get the object type string. |

**Example**  
```js
var o = new Object();

toStringTag(o); // returns '[object Object]'
```
