const mapWith = (fn, [first, ...rest]) =>
    first === undefined
    ? []
    : [fn(first), ...mapWith(fn, rest)];

console.log(mapWith((x) => x * x, [1,2,3,4,5]));