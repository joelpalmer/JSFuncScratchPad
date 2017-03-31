const compose = (...funcs) => x => funcs.reduceRight((v, f) => f(v), x);
const pipe = (...funcs) => x => funcs.reduce((v, f) => f(v), x);

const add1 = n => n + 1;
const double = n => n * 2;

const add1ThenDouble = compose(
    double,
    add1
);

console.log(add1ThenDouble(2));
