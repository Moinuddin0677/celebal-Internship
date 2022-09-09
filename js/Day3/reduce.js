const arr = [5, 10, 15, 20, 25, 30, 35, 40];
sum = arr.reduce((previous, current) => {
  console.log(previous, current);
  return previous - current;
}, 100);
console.log(sum);
