//work from Eric Elliot's composing series on medium
//map
const map = (fn, arr) => arr.reduce((acc, item, index, arr) => {
    return acc.concat(fn(item, index, arr));
}, []);

//filter
const filter = (fn, arr) => arr.reduce((newArr, item) => {
    return fn(item) ? newArr.concat([item]) : newArr
;}, []);