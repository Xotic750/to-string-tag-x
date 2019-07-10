import toStringTag from 'src/to-string-tag-x';

/* eslint-disable-next-line compat/compat */
const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const itSymbol = hasSymbol ? it : xit;

describe('toStringTag', function() {
  it('primitives', function() {
    expect.assertions(6);
    expect(toStringTag()).toBe('[object Undefined]');
    expect(toStringTag(undefined)).toBe('[object Undefined]');
    expect(toStringTag(null)).toBe('[object Null]');
    expect(toStringTag(1)).toBe('[object Number]');
    expect(toStringTag(true)).toBe('[object Boolean]');
    expect(toStringTag('x')).toBe('[object String]');
  });

  it('primitives as objects', function() {
    expect.assertions(3);
    expect(toStringTag(Object(1))).toBe('[object Number]');
    expect(toStringTag(Object(true))).toBe('[object Boolean]');
    expect(toStringTag(Object('x'))).toBe('[object String]');
  });

  it('common objects', function() {
    expect.assertions(5);
    expect(toStringTag([1, 2, 3])).toBe('[object Array]');
    expect(toStringTag({})).toBe('[object Object]');
    expect(toStringTag(describe)).toBe('[object Function]');
    expect(toStringTag(new Date())).toBe('[object Date]');
    expect(toStringTag(new Error('x'))).toBe('[object Error]');
  });

  itSymbol('symbols', function() {
    expect.assertions(2);
    /* eslint-disable-next-line compat/compat */
    expect(toStringTag(Symbol(''))).toBe('[object Symbol]');
    /* eslint-disable-next-line compat/compat */
    expect(toStringTag(Object(Symbol('')))).toBe('[object Symbol]');
  });
});
