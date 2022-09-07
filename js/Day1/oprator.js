// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator

(x = 10), (y = "10");
if (x == y) {
  console.log("match only value");
}
if (x === y) {
  console.log("Fully match");
}

if (x != y) {
  console.log("Not match value");
}
if (x !== y) {
  console.log("Not Fully match");
}

if (x && y) {
  console.log("Logical and");
}

if (x || y) {
  console.log("Logical or");
}
i = 0;
if (!i) {
  console.log("Logical not");
}
