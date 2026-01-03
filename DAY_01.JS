// DSA: Arrays Basics
// •	What is an array?
// •	Find the sum of all elements
// •	Find max & min element
// JavaScript:
// •	var, let, const
// •	Question: Difference between let and var
// •	Code: Swap two numbers
// CSS:
// •	CSS Syntax
// •	Inline vs Internal vs External CSS
// •	Task: Style a paragraph with color, font-size, font-family

// **********************************************************************************************

// DSA //

// Array is a special type of object which store multiple value in a single variable.

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(findSum([1, 2, 3, 4, 5]));

function findMin(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(findMin([1, 2, 37, 4]));

function findMax(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([1, 2, 3, 54]));

// JS //

// var
// 1. Old way of declaring variables in JavaScript (ES5).
// 2. Function-scoped (not block-scoped).
// 3. Can be redeclared and updated.
// 4. Hoisted to the top of the function (or global scope if declared outside), but initial value is undefined.

// let
// 1. Introduced in ES6.
// 2. Block-scoped (respects { } blocks).
// 3. Can be updated, but cannot be redeclared in the same scope.
// 4. Also hoisted, but cannot be used before declaration (temporal dead zone).

// const
// 1. Introduced in ES6.
// 2. Blocked scope
// 3. Cannot be redeclared and reupdated.
// 4. Must be initialized when declared.

// Difference between let and var:

// Code: Swap two numbers
function swapNumber(num1, num2) {
  let temp = num1;
  num1 = num2;
  num2 = temp;
  return [num1, num2];
}
let [a, b] = swapNumber(4, 5);
console.log(a, b);

