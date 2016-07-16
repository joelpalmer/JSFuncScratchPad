const wrap = (something) => {
  const wrapped = [something];

  return wrapped;
}

console.log(wrap("package"));


const unwrap = (wrapped) => {
  const [something] = wrapped;

  return something;
}

console.log(unwrap(["present"]));