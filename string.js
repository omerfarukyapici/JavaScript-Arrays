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

//regex 
//const myString = "This Is a string";
/* const regex1 = myString.search(/i/);
const regex2 = myString.search(/s/);
const regex3 = myString.search(/a/); */
//console.log(regex1, regex2, regex3);







//split()
const myString = 'I love coffee';
console.log(myString);
console.log(typeof(myString));

const convertToArray = myString.split();
console.log(convertToArray); 
console.log(Array.isArray(convertToArray));
/* 
output👇
I love coffee
string  -> Before split() method we have a string
[ 'I love coffee' ]
true    -> After split() method we have an array
*/
