/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  // Check arguments.length so explicit `undefined` initial values are honored,
  // matching how the native `Array.prototype.reduce` distinguishes the two.
  const noInitialValue = arguments.length <= 1;
  const len = this.length;

  let k = 0;
  let acc;

  if (noInitialValue) {
    // Seed from the first present index, skipping leading holes in sparse arrays.
    while (k < len && !Object.hasOwn(this, k)) k++;
    if (k >= len) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    acc = this[k];
    k++;
  } else {
    acc = initialValue;
  }

  for (; k < len; k++) {
    // Missing indexes do not contribute to the reduction.
    if (Object.hasOwn(this, k)) {
      acc = callbackFn(acc, this[k], k, this);
    }
  }

  return acc;
};
