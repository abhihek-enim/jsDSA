let x = -123;
let isLessThanZero = x < 0;
if (isLessThanZero) {
  x = -x;
}

let i = "";
while (x > 0) {
  let mod = x % 10;
  i = i + mod;
  x = Math.floor(x / 10);
}
if (isLessThanZero) {
  i = -i;
}
console.log(i);
