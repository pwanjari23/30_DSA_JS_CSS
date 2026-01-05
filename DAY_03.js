// DSA: Searching
// •	Linear Search
// •	Find element index
// JavaScript:
// •	Operators
// •	Arithmetic vs Logical
// •	Code: Find largest of 3 numbers
// CSS:
// •	Box Model
// •	margin, padding, border
// •	Task: Create a card layout

// ***********************************************************************************
// DSA

// LINER SEARCH
// Linear Search (or Sequential Search) is the simplest search algorithm.
// It works by checking each element in a list one by one until it finds the target value.

function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex([1, 2, 3, 4, 5, 6], 4));

// JS

function findLargest(a, b, c) {
  let largest;
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
  return largest;
}
console.log(findLargest(5,3,8));
