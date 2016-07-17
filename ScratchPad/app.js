const flatten = ([first, ...rest]) => {
    if (first === undefined) {
        return [];
    }
    else if (!Array.isArray(first)) {
        return [first, ...flatten(rest)];
    }
    else {
        return [...flatten(first), ...flatten(rest)];
    }
}

console.log(flatten(["foo", [3,4, []]]));