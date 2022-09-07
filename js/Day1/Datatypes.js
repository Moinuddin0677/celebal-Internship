// Nameing convension
// Start them with a letter, underscore _, or dollar sign $.
// After the first letter, we can use numbers, as well as letters, underscores, or dollar signs.
// Don’t use any of JavaScript’s reserved keywords


// 4 Ways to Declare a JavaScript Variable:
// Using var  var _number = 5
// Using let   let $number = 5
// Using const const number1 = 5
// Using nothing   number = 5

// var allow to redeclare a variable with same name but let not 
// var has function scope but let has block scope

//Templat literal ==  ``

//Number
let length=10
console.log( typeof(length), length)

//String
let name="Moinuddin"
console.log(typeof(name), name)

//Object
let fullName = { firstName:"Moinuddin", lastName:"Rangrej"}
console.log(`${typeof(fullName)}:`,fullName)

//Adding a number with string js act number as string
let x=10+name
console.log(`${typeof(x)}: ${x}`)

//It add all neabors number then add them as a string
let y=10+20+name
console.log(`${typeof(y)}: ${y}`)

//flot
let flotNumber = 34.50
console.log(`${typeof(flotNumber)}: ${flotNumber}`)

//Large and small numbers with exponential
let extraLarge=123e5
console.log(`${typeof(extraLarge)}: ${extraLarge}`)
let extraSmall=123e-5
console.log(`${typeof(extraSmall)}: ${extraSmall}`)

//boolean (true, false)

//  assign:     =
// check only value:  ==
// check value with datatype:   ===  

console.log(x===y)
console.log(x!=y)