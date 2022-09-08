// var fruits = ["Banana", "Orange", "Apple", "Papaya", "Mango"];
// alert(fruits);
// var sorted = fruits.sort();
// alert(fruits);
// alert(sorted);

var persons = [
  { name: "Harry", age: 14 },
  { name: "Ethan", age: 30 },
  { name: "Peter", age: 21 },
  { name: "Clark", age: 42 },
  { name: "Alice", age: 16 },
];
for (var i = 0; i < persons.length; i++)
  document.write(persons[i].name, persons[i].age);
document.write("<br/>");
persons.sort();
for (var i = 0; i < persons.length; i++)
  document.write(persons[i].name, persons[i].age);
