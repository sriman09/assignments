/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let arr = numbers.sort((a, b) => a - b);
  return arr.pop();
}

module.exports = findLargestElement;
