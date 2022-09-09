arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

arr1 = [];
arr.find((element) => {
  if (element > 7) {
    arr1.push(element);
  }
});

console.log(arr1);
//by element updating is not allowed
arr.forEach((element, index, arr) => {
  arr[index] = element * 10;
});
arr.push("Moinuddin");
console.log(arr);
