function fibonacci(num, a = 0, b = 1) {
  if (num === 0) {
    console.log(a);
    return;
  }

  console.log(a);
  return fibonacci(num - 1, b, a + b);
}

fibonacci(5);
