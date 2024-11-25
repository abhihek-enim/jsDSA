function allDivisors(num) {
  if (num == 0) {
    return 0;
  }
  let arr = [];
  for (let i = 1; i <= Math.ceil(num / 2); i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }

  return arr;
}
console.log(allDivisors(27));
