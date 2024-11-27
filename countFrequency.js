function countFrequency(arr) {
  const map = new Map();
  arr.forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}

function maxNminFrequency(arr) {
  const freqMap = countFrequency(arr);
  console.log(freqMap);
  let maxKey = null;
  let minKey = null;
  let maxFreq = -Infinity;
  let minFreq = Infinity;

  freqMap.forEach((value, key) => {
    if (value > maxFreq) {
      maxFreq = value;
      maxKey = key;
    }
    console.log(maxFreq, maxKey);
    if (value < minFreq) {
      minFreq = value;
      minKey = key;
    }
  });
  return {
    max: { key: maxKey, frequency: maxFreq },
    min: { key: minKey, frequency: minFreq },
  };
}
console.log(maxNminFrequency([1, 2, 3, 3, 3, 2, 2, 4, 4, 5, 5, 5, 5, 7, 8]));
