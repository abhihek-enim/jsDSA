// print name n time using recursion:

// function printName(i, n) {
//   if (i > n) return; // base case for breaking recursion
//   console.log(n);
//   printName(i, --n); // calling the function itsself.
// }

// printName(1, 5);

// SUM OF N NUMBERS

// function sumofN(n) {
//   if (n == 0) return 0;
//   return n + sumofN(--n);
// }

// console.log(sumofN(5));

// factorial of N;

// function factorial(n) {
//   if (n == 0 || n == 1) return 1;
//   return n * factorial(--n);
// }
// console.log(factorial(5));

//  REVERSE AN ARRAY.

/* 
[1,2,3,4,5]=> [5,4,3,2,1]

arr: length, arr[0]
*/
function reverseArray(arr, start = 0, end = arr.length - 1) {
  // Base condition: If start index is greater than or equal to end index, stop recursion
  if (start >= end) {
    return;
  }

  // Swap the elements at start and end
  [arr[start], arr[end]] = [arr[end], arr[start]];

  // Recursive call with updated indices
  reverseArray(arr, start + 1, end - 1);
}

// Example usage
const myArray = [1, 2, 3, 4, 5];
reverseArray(myArray);
console.log(myArray); // Output: [5, 4, 3, 2, 1]
