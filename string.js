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

/* JavaScript set methods */

//add()
function addMethod() {
    const dataTypes = {
        string: "Coffee",
        array: [1, 2, 3],
        object: {name: "Ömer", lastName: "Yapici"},
        function: async () => { return "I'am a async" },
        function2:  () => { return "I'am a sync" },
        number: 20,
        boolean: true,
    }
    const set1 = new Set();
    set1.add(dataTypes.string);
    set1.add(dataTypes.array);
    set1.add(dataTypes.object);
    set1.add(dataTypes.function());
    set1.add(dataTypes.function2());
    set1.add(dataTypes.number);
    set1.add(dataTypes.boolean);

    for (const i of set1) {
        console.log(i);
    }
}
addMethod();