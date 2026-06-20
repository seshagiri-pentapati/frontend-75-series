/**
 * @param {(this: any, ...args: Array<unknown>) => unknown} func
 * @param {number} wait
 * @returns {(this: any, ...args: Array<unknown>) => unknown}
 */
export default function throttle(func, wait = 0) {
  let shouldThrottle = false;

  // Use a normal function so calls keep the original `this` binding.
  return function (...args) {
    if (shouldThrottle) {
      return;
    }

    shouldThrottle = true;
    setTimeout(function () {
      shouldThrottle = false;
    }, wait);

    func.apply(this, args);
  };
}
