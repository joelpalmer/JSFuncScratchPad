//From Eric Elliot's “Composing Software” series
//Higher Order Functions

//filter 4 letter words - first order func
// const censor = words => {
//     const filtered = [];
//     for (let i=0, {length} = words; i < length; i++) {
//         const word = words[i];
//         if (word.length !==4) filtered.push(word);
//     }
//     return filtered;
// };

// //console.log(censor(['oops', 'gasp', 'shout', 'joel', 'sun', 'go', 'palmer']));

// //select words that begin with 's' = first order func
// const startsWithS = words => {
//     const filtered = [];
//     for (let i=0, {length} = words; i < length; i++) {
//         const word = words[i];
//         if (word.startsWith('s')) filtered.push(word);
//     }
//     return filtered;
// }

//console.log(startsWithS(["Sam", "Joel", "mary", "stud"]));

//reducer
const reduce = (reducer, initial, arr) => {
    //shared stuff
    let acc = initial;
    for (let i=0, length = arr.length; i < length; i++) {
        //unique stuff in reducer().calls.any()
        acc = reducer(acc, arr[i]);
        //more share stuff
    }
    return acc;
};

//filter
const filter = (
  fn, arr
) => reduce((acc, curr) => fn(curr) ?
  acc.concat([curr]) :
  acc, [], arr
);

//console.log(reduce((acc, curr) => acc + curr, 0, [1,2,3]));
const censor = words => filter(
    word => word.length !==4,
    words 
);
console.log(censor(['oops', 'gasp', 'shout', 'joel', 'sun', 'go', 'palmer']));

const startsWithS = words => filter(
    word => word.startsWith('s'), 
    words
);

console.log(startsWithS(["Sam", "Joel", "mary", "stud"]));

const highpass = cutoff => n => n >= cutoff;
const gt3 = highpass(3);
console.log([1,2,3,4].filter(gt3));

console.log([2,4,6].reduce((acc, n) => acc + n, 0));
