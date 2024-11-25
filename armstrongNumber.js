function armstrongNumber(num) {
  let digits = countDigits(num);
  let tempNum = num;
  let i = 0;
  while (num > 0) {
    let mod = num % 10;
    i += Math.pow(mod, digits);
    console.log(i);
    num = Math.floor(num / 10);
  }
  return tempNum == i ? true : false;
}

function countDigits(n) {
  let count = Math.floor(Math.log10(n) + 1);
  return count;
}

console.log(armstrongNumber(127));
