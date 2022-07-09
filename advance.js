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

