var colors = ["Red", "Green", "Blue"];
colors.push("Pink", "Voilet");
colors.unshift("Yellow", "Grey");

document.write(colors + "<br>"); // Prints: Yellow,Grey,Red,Green,Blue,Pink,Voilet
document.write(colors.length); // Prints: 7

var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];

// Loop through all the elements in the array
for (var i in fruits) {
  document.write(fruits[i] + "<br>");
}
