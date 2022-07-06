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
expressionType(3, 6, 9);
/* output 👉 162 */

//function declaration
const declarationType = function (x, y, z) {
    return x + y + z;
}
declarationType(1, 3, 5);
/* output 👉 9 */