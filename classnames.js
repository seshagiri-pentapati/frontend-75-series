//classnames is a commonly used utility in modern frontend applications to conditionally join CSS class names together. If you've written React applications, you likely have used a similar library.

//Implement the classnames function.

//Examples

// classNames('foo', 'bar'); // 'foo bar'
// classNames('foo', { bar: true }); // 'foo bar'
// classNames({ 'foo-bar': true }); // 'foo-bar'
// classNames({ 'foo-bar': false }); // ''
// classNames({ foo: true }, { bar: true }); // 'foo bar'
// classNames({ foo: true, bar: true }); // 'foo bar'
// classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
// Arrays will be recursively flattened as per the rules above.


// classNames('a', ['b', { c: true, d: false }]); // 'a b c'
// Values can be mixed.


// classNames(
//   'foo',
//   {
//     bar: true,
//     duck: false,
//   },
//   'baz',
//   { quux: true },
// ); // 'foo bar baz quux'
// Falsy values are ignored.


// classNames(null, false, 'bar', undefined, { baz: null }, ''); // 'bar'
// In addition, the returned string should not have any leading or trailing whitespace.

// Resources
// classnames library on GitHub
// clsx library on GitHub: A newer version that serves as a faster and smaller drop-in replacement for classnames.//

/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  // Each recursive call returns one space-joined segment; the parent call keeps
  // those segments in the original left-to-right order.
  const classes = [];

  args.forEach((arg) => {
    // Ignore falsey values.
    if (!arg) {
      return;
    }

    const argType = typeof arg;

    // Handle string and numbers.
    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
      return;
    }

    // Arrays recurse before objects because `typeof []` is `'object'`.
    if (Array.isArray(arg)) {
      classes.push(classNames(...arg));
      return;
    }

    // Only own truthy keys contribute classes.
    if (argType === 'object') {
      for (const key in arg) {
        if (Object.hasOwn(arg, key) && arg[key]) {
          classes.push(key);
        }
      }

      return;
    }
  });

  return classes.join(' ');
}
