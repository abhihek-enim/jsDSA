let x = -1221;
let inputNum = x;

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
i = Number(i);
if (i == inputNum) {
  console.log("true");
} else {
  console.log("false");
}
