function isPrime(num) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      ++count;

      if (num / i !== i) {
        ++count;
      }
    }
  }
  if (count == 2) {
    console.log("is prime");
  } else {
    console.log("not prime");
  }
}

isPrime(23);
