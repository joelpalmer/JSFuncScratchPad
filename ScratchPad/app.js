function repeat(times, VALUE) {
    return _.map(_.range(times),
        function () {
            return VALUE
        });
}

function repeatedly(times, fun) {
    return _.map(_.range(times), fun);
}

console.log(repeatedly(33, () => {
    return Math.floor((Math.random()*10) +1);
}));

function interateUntil(fun, check, init) {
    const ret = [];
    let result = fun(init);
    
    while (check(result)) {
        ret.push(result);
        result = fun(result);
    }
    
    return ret;
};

console.log(

    interateUntil((n)=>{
        return n + n
    }, (n)=> {
        return n <= 1024
    }, 1)

);