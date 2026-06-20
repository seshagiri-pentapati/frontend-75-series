// How to flatten an array in JavaScript
// If you just need to flatten an array in production code, use the built-in Array.prototype.flat:


// const nested = [1, [2, [3, [4, [5]]]]];

// // Flatten one level (the default).
// nested.flat(); // [1, 2, [3, [4, [5]]]]

// // Flatten a specific number of levels.
// nested.flat(2); // [1, 2, 3, [4, [5]]]

// // Flatten all levels by passing Infinity.
// nested.flat(Infinity); // [1, 2, 3, 4, 5]
// Array.flat is part of ES2019 and is supported in every evergreen browser and Node.js 11+. It returns a new array and does not mutate the original.

// When Array.flat isn't enough
// Array.flat covers the standard case. You'll need a custom flatten when you need any of the following:

// Skip-flattening certain values, for example keeping Buffer-like objects or typed arrays intact while flattening plain arrays.
// Flattening trees of objects rather than arrays, such as nested children in a tree node structure.
// Iterative flattening to avoid recursion limits when the nesting depth is unknown and potentially adversarial.
// Lazy flattening with a generator when the result is large and you only need part of it.
// For all of those, you'll write your own flatten. This is also one of the most common JavaScript interview questions because it tests recursion, type checking, and array manipulation in a small surface area.

// Implement a function flatten that returns a newly created array with all subarray elements concatenated recursively into a single level.

// Examples

// // Single-level arrays are unaffected.
// flatten([1, 2, 3]); // [1, 2, 3]

// // Inner arrays are flattened into a single level.
// flatten([1, [2, 3]]); // [1, 2, 3]
// flatten([
//   [1, 2],
//   [3, 4],
// ]); // [1, 2, 3, 4]

// // Flattens recursively.
// flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]

export default function flatten(value) {
   return value.reduce(
    // Recurse only for nested items, then concatenate the flattened chunk.
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
    [],
  );
}


