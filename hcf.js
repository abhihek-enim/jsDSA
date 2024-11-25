function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2); // Use modulus for efficiency
}

console.log(gcd(20, 24)); // Outputs: 7
