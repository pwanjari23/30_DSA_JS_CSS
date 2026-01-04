// DSA: Array Operations
// •	Insert element at end
// •	Delete element
// •	Reverse an array
// JavaScript:
// •	Data Types
// •	typeof operator
// •	Code: Check number is even or odd
// CSS:
// •	Colors & Units
// •	px, %, em, rem
// •	Task: Create 3 divs with different sizes

// ***************************************************************************
// DSA

// function insertElement(arr) {
// inbuilt method
//     arr.push("dragonfruit");
//     return arr;
// }

// let fruits = ["apple", "banana", "sitaphal"];
// console.log(insertElement(fruits));

// function insertElement(arr) {
//     // using for loop
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i];
//   }
//   newArr[arr.length] = "dragonfruit";
//   return newArr;
// }
// let fruits = ["apple", "banana", "sitaphal"];
// console.log(insertElement(fruits));

// function deleteElement(arr, index){
//     arr.splice(index, 1);
//     return arr;
// }
// let fruits = ["apple", "banana", "sitaphal"];
// console.log(deleteElement(fruits, 1));

// function deleteWithoutBuiltin(arr, index) {
//   let newArr = [];
//   let j = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (i !== index) {
//       newArr[j] = arr[i];
//       j++;
//     }
//   }

//   return newArr;
// }

// let fruits = ["apple", "banana", "sitaphal"];
// console.log(deleteWithoutBuiltin(fruits, 2));

// function reverse(arr) {
// using loop
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed,push(arr[i]);
//   }
//   return reversed;
// }
// console.log(reverse([1, 2, 3, 4]));

// function reverse(arr){
//     return arr.reverse();
// }
// console.log(reverse([1,2,3,4]));


// JAVASCRIPT

// DATATYPES
// 1. number
// 2. string
// 3. undefined
// 4. null
// 5. boolean
// 6. array
// 7. object

// TYPES OF OPERATORS
// 1. Arithemetic 
// 2. comparison
// 3. assignment
// 4. logical 

function evenOdd(n){
    if(n%2!==0){
        console.log("odd")
    }else{
        console.log("even")
    }
}
evenOdd(4);



