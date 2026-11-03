/**
 * Sorts an array of numbers in ascending order.
 * @param {number[]} arr
 * @returns {number[]} new sorted array
 */
function sortNumbersAscending(arr) {
  return [...arr].sort((a, b) => a - b);
}

/**
 * Sorts an array of numbers in descending order.
 * @param {number[]} arr
 * @returns {number[]} new sorted array
 */
function sortNumbersDescending(arr) {
  return [...arr].sort((a, b) => b - a);
}

