let num = 12345678900987;

let i = 0;
while (num > 0) {
  let mod = num % 10;
  num = Math.floor(num / 10);
  if (mod) {
    i++;
  }
}
console.log("brute force: ", i);

// optimized approach: log of base 10 on positive integers return number of digits n, we add one to ensure it works for powers of 10

function countDigits(n) {
  let count = Math.floor(Math.log10(n) + 1);
  return count;
}
console.log(countDigits(123));
