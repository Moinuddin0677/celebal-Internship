var arr = [1, 0, 3, 1, false, 5, 1, 4, 7];

var result = arr.find(function (element) {
  return element < 5;
});
document.write(result + "<br>");

var arr = [1, 0, 3, 1, false, 5, 1, 4, 7];

var result = arr.findIndex(function (element) {
  return element > 6;
});
document.write(result);
