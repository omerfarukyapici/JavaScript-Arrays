/* Challenges */

/*  1 -) Write a function that takes a string (a) as argument
    2 -) Remove the first 5 characters of string
    3 -) Return the result  */
const removeFirstFive = a => {
    const result = a.slice(5);
    return result;
}
//console.log(removeFirstFive("omerfarukyapici"));
/* 
output👇
arukyapici
*/




//Sum array values
function sumArray(arr) {
    let sum = 0;
    for (const value of arr) {
        sum += value
    }
    return sum;
}

const result1 = sumArray([1, 2, 3, 10, 19]);
console.log(result1);
//output 👉 35

const myArray = [9, 7, 4, 3];
const result2 = sumArray(myArray);
console.log(result2);
//output 👉 23