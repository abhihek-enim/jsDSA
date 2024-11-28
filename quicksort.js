function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1]; // Choosing the last element as the pivot
  let left = [];
  let right = [];

  // Partitioning the array
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sorting the sub-arrays and combining them with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
let array = [3, 9, 8, 5, 2, 7, 4, 1];
console.log(quickSort(array)); // Output will be the sorted array: [1, 2, 3, 4, 5, 7, 8, 9]
