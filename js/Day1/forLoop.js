for (i = 0; i < 10; i++) {
  console.log(i);
}
console.log("\n------------------------------------------");

var name = "Moinuddin";
for (i = 0; i < name.length; i++) {
  console.log(name[i]);
}
console.log("------------------------------------------");

i = 0;
for (; i < name.length; i++) process.stdout.write(name[i]);
console.log("\n------------------------------------------");
i = 0;
for (; i < name.length; i++) process.stdout.write(name[i]);

console.log("\n------------------------------------------");

const cars = ["BMW", "Volvo", "Saab", "Ford"];
for (key in cars) {
  process.stdout.write(cars[key] + " ");
}
console.log("\n------------------------------------------");
