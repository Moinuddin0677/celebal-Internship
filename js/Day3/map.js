const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const obj = [
  { name: "Moinuddin", age: 20 },
  { name: "Sujit", age: 30 },
];
console.log(number.map(Math.sqrt));

obj1 = { name: "Moinuddin", age: 20 };
obj2 = { fr: "Sujit", age1: 30 };
obj3 = {};
Object.assign(obj3, obj1, obj2, { number: 50 });
console.log(obj3);

obj.map((element) => {
  Object.values(element).map((x) => {
    console.log(x);
  });
});

Object.values(obj3).map((x) => {
  console.log(x);
});
