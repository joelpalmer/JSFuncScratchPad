const maybe = (fn) =>
  function (...args) {
    if (args.length === 0) {
      return
    }
    else {
      for (let arg of args) {
        if (arg == null) return;
      }
      return fn.apply(this, args)
    }
  }
console.log(maybe((a, b, c) => a + b + c)(1, null, 3));