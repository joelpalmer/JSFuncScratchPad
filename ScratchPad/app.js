//splat
function splat(fun){
    return function(array){
        return fun.apply(null, array);
    };
}

var addArrayElements = splat(function(x, y) {
    return x + y;
});

console.log(`splat: ${addArrayElements([1,2])}`);
//todo: UT for splat
//todo: move splat stuff to seperate file

//unsplat

function unsplat(fun){
    return function(){
        return fun.call(null, _.toArray(arguments));
    };
}

var joinElements = unsplat(function(array){
    return array.join(' ')
});

console.log(`unsplat: ${joinElements(1,2)}`);

var whatisthis = joinElements(2, 3);
console.log(typeof whatisthis);
