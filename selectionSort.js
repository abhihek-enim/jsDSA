function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min != i) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
  return arr;
}

console.log(selectionSort([7, 4, 0, 2, 1]));
