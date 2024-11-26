var map = function (arr, fn) {
  return arr.map(fn);
};

let arr = [1, 2, 3];
function fn(n, i) {
  return n + 1;
}

console.log(map(arr, fn));
