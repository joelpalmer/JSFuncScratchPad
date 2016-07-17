const length = ([first, ...rest]) =>
    first === undefined
        ? 0
        : 1 + length(rest);

console.log(length([]));
console.log(length(["foo"]));
console.log(length(["foo", "bar", "baz"]));