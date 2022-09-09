// document.write("Moinuddin");
// alert(document.documentElement.getAttribute("lang"));

// document.body.style.background = "gray";

// alert(document.head.firstElementChild.nodeName);
// document.write(document.body.children[0].nodeName);

// document.write(document.body);

var match = document.getElementById("mark");
console.log(match);
match.style.backgroundColor = "yellow";

var match1 = document.getElementsByClassName("test");
console.log(match1);
document.write(match1.length);

match1[0].style.backgroundColor = "yellow";
match1[1].style.backgroundColor = "blue";
match1[match1.length - 1].style.fontStyle = "italic";

tag1 = document.getElementsByTagName("h5");
tag1[0].style.fontStyle = "italic";

query1 = document.querySelectorAll("ul li");
document.write(query1.length);

query2 = document.querySelectorAll("ul li.tick");
query2[0].style.textDecoration = "underline";

query3 = document.querySelectorAll("ul li:nth-child(2)");
query3[0].style.backgroundColor = "green";
