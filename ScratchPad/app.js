const factorial = (n, work = 1) =>
    n === 1
    ? work
    : factorial(n - 1, n * work);

console.log(factorial(1));

console.log(factorial(5));
