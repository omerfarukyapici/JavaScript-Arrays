//🔔🔔👉👉👇👇👇📌📌📌

const { type } = require("os");

//toLowerCase(), toUpperCase()
const myName = 'OmerFarukYapici';
//console.log(myName.toLowerCase());
//console.log(myName.toUpperCase());
/* 
output👇
omerfarukyapici 
OMERFARUKYAPICI  
*/

//concat(), repeat()
const str1 = "A";
const str2 = 'B';
const str3 = `C`;

const myLetters = str1.concat(str2, str3, " ").repeat(3);
//console.log(myLetters);
/* 
output👇
ABC ABC ABC
*/

//split()
const myString = 'I love coffee';
//console.log(myString);
//console.log(typeof(myString));

const convertToArray = myString.split();
//console.log(convertToArray); 
//console.log(Array.isArray(convertToArray));
/* 
output👇
I love coffee
string  -> Before split() method we have a string
[ 'I love coffee' ]
true    -> After split() method we have an array
*/

//trim()
const trimString = "   This is a string.   ";
//console.log(trimString);
const result = trimString.trim();
//console.log(result);
/* 
output👇
"   This is a string.   " -> Before trim() method.
"This is a string." -> After trim() method.
*/

/* JavaScript Set(){} object */





//Set() object
const mySet = new Set([0, -7, 38, 4]); //Create a Set object

mySet.add(-20); //Add value in the set.
mySet.has(2); //Check if it has value (true or false).
mySet.forEach(value => (value)); //Return values.
mySet.forEach(value => (mySet.delete(value))); //Delete values.
mySet.clear(); //Clear values.



