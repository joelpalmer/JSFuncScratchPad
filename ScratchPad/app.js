const arraySum = ([first, ...rest], accumulator = 0) => first === undefined ? accumulator : arraySum(rest, first + accumulator)

console.log(arraySum([1, 4, 9, 16, 25]));