(async () => {
    async function helloFunction() {
        return "Hello World";
    }
    const text = await helloFunction();
    console.log(text)

    const deneme = async () => {
        return "Ben denemeyim";
    }
    const text2 = await deneme();
    console.log(text2);


})/* () */

//function expression 
function expressionType(a, b, c) {
    return a * b * c;
}
//expressionType(3, 6, 9);
/* output 👉 162 */

//function declaration
const declarationType = function (x, y, z) {
    return x + y + z;
}
//declarationType(1, 3, 5);
/* output 👉 9 */


/* ---- JAVASCRİPT ARROW FUNCTİONS ---- */

/* Without parameter */
const typeOne = () => "Arrow functions";
typeOne();
// output 👉 Arrow functions 

/* One parameter */
const typeTwo = n => n + 3;
typeTwo(4);
// output 👉 7

/* Multiple parameters */
const typeThree = (a, b, c) => a * b * c;
typeThree(9, 5, 3);
// output 👉 135

/* Return with "()" */
const typeFour = language => (language);
typeFour("JavaScript");
// output 👉 JavaScript

/* Multiple lines with "{}" and the "return" keyword */
const typeFive = () => {
    return "Hello world";
}
typeFive();
// output 👉 Hello world


/* Variables */

//when you use var, you can declare the same variable as many times as you like, but with let you can't.
var fruit = "Apple";
// output 👉 Apple
var fruit = "Pineapple";
// output 👉 Pineapple


let hardware = "CPU";
// output 👉 CPU
hardware = "GPU";
// output 👉 GPU


const century = 21;
// output 👉 21
//century = 22;
// ❌ fail




function waitThreeSeconds() {
    return new Promise(process => {
        setTimeout(() => {
            process("The await is worked");
        }, 3000);
    })
}

function waitTwoSeconds() {
    return new Promise(data => {
        setTimeout(() => {
            data("The await is worked again")
        }, 2000);
    })
}

async function asyncFunction() {
    console.log("The process is starting..")
    const result = await waitThreeSeconds();
    console.log(result);
    const newOne = await waitTwoSeconds();
    console.log(newOne);
}
//asyncFunction();


// JavaScript basic class structure
class Language {
    constructor(name, year, oop) {
        this.name = name,
            this.year = year,
            this.oop = oop
    }
}

const language1 = new Language('JavaScript', 1995, true);
const language2 = new Language('Python', 1990, true);
const language3 = new Language('Ruby', 1995, true);

//console.log(language1, language2, language3);

/* 
output👇
Language { name: 'JavaScript', year: 1995, oop: true } 
Language { name: 'Python', year: 1990, oop: true } 
Language { name: 'Ruby', year: 1995, oop: true }
*/


//JavaScript Prototype method
class Developer {
    constructor(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName
    }

    //Getter
    get fullName() {
        return this.concatNames();
    }

    //Method
    concatNames() {
        return this.firstName + ' ' + this.lastName;
    }
}

const Developer1 = new Developer('John', 'Dee');

//console.log(Developer1.fullName);
//output 👉 John Dee


//three dots (…) 
let array = ["Omer", "Faruk", "Yapici"];
let arrayObject = { ...array };
/* console.table(arrayObject)
console.log(arrayObject)
console.log(array) */

const adrian = {
    fullName: 'Adrian Oprea',
    occupation: 'Software developer',
    age: 31,
    website: 'https://oprea.rocks'
};

const bill = {
    ...adrian,
    fullName: 'Bill Gates',
    website: 'https://microsoft.com'
};

/* console.log(adrian)
console.log(bill) */


const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [...numbers1, 1, 2, 6, 7, 8]; // this will be [1, 2, 3, 4, 5, 1, 2, 6, 7, 8]
/* console.log(numbers2) */


function sum(...numbers) {
    return numbers.reduce((accumulator, current) => {
        return accumulator += current
    });
};
sum(1, 2) // 3
console.log(sum(1, 2, 10, 23));



function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;
}

/* console.log(sum(1, 2, 3)); */
// expected output: 6

/* console.log(sum(1, 2, 3, 4)); */
  // expected output: 10
