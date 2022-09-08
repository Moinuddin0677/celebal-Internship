var colors = ["Red", "Green", "Blue"];
var removed = colors.splice(0, 1); // Remove the first element

document.write(colors); // Prints: Green,Blue
document.write(removed);

removed = colors.splice(1, 0, "Pink", "Yellow");

document.write(colors);
