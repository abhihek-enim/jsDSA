function mergeSort(arr) {
  if (arr.length <= 1) return arr; // Base case: array with one element

  const mid = Math.floor(arr.length / 2); // Split point
  const left = mergeSort(arr.slice(0, mid)); // Recursively sort left half
  const right = mergeSort(arr.slice(mid)); // Recursively sort right half

  console.log("Merging:", left, right); // Log before merging
  return merge(left, right); // Merge sorted halves
}

function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      console.log("Added from left:", left[i]); // Log which element is added from left
      i++;
    } else {
      result.push(right[j]);
      console.log("Added from right:", right[j]); // Log which element is added from right
      j++;
    }
  }

  // Add remaining elements
  console.log("Remaining left:", left.slice(i));
  console.log("Remaining right:", right.slice(j));
  return result.concat(left.slice(i)).concat(right.slice(j));
}

const array = [38, 27, 43, 3, 9];
console.log("Sorted array:", mergeSort(array)); // Output: [3, 9, 27, 38, 43]
