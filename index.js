/* --------- JavaScript Arrays --------- */

//Basic array and looping 
const basicArrayAndLooping = () => {
    const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    for (let i = 0; i < array1.length; i++) {
        console.log(array1[i]);
    }
}
//basicArrayAndLooping();
/* Output 👇 */
/* 
0
1 
2 
3 
4 
5 
6 
7 
8 
9 
10
11
12
13
14
15
16
17
18
19
20
*/








//Create an array, and change value
const changingArrayValue = () => {
    const anArray = ["one", "two", "three", "four", "five",/* Empty -> */ " ", "seven", "eight", "nine", "ten"];
    console.log(anArray);
    anArray[5] = "six"; //Changing empty string value
    anArray[0] = "zero"; //Changing string value
    console.log(anArray);
}
//changingArrayValue();
/* Output 👇*/
/* 
[
  'one',   'two',
  'three', 'four',
  'five',  ' ',
  'seven', 'eight',
  'nine',  'ten'
]
[
  'zero',  'two',
  'three', 'four',
  'five',  'six',
  'seven', 'eight',
  'nine',  'ten'
]
*/




//create an array with new keyword.The two examples above do exactly the same.There is no need to use new Array().
const array3Function = () => {
    const array3 = new Array("Saab", "Volvo", "BMW");
    console.log(array3);
}
//array3Function();

//You can have objects in an array. You can have functions in an array. You can have arrays in an array:
const differentArrayValue = () => {
    const myFunction = () => { console.log("This is myFunction in an array!"); }
    const anArray = [
        { id: 1, name: "Ömer Faruk", likeCoding: true }, //Object in an array
        myFunction, //Function in an array
        ["1", "2", "3", "4", "5"], //Array in an array
    ];
    console.log(anArray);
}
//differentArrayValue();

/* output 👇 */
/* 
[
  { id: 1, name: 'Ömer Faruk', likeCoding: true },
  [Function: myFunction],
  [ '1', '2', '3', '4', '5' ]
]
*/


/* --------- ARRAY PROPERTİES AND METHODS --------- */


const takeLastValueofAnArray = () => {
    const anArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    //Accessing the Last Array Element
    const lastValue = anArray[anArray.length - 1];
    console.log(lastValue);
}
//takeLastValueofAnArray();

/* output 👇 */
/* 
10
*/










/* --- Looping Array Elements --- */


const arrayAndForLoop = () => {
    const anArray = [1, 2, 3, 4, 5];

    for (let i = 0; i < anArray.length; i++) {
        console.log(anArray[i]);
    }
}
//arrayAndForLoop();

/* output 👇*/
/* 
1
2
3
4
5
*/



const arrayAndForEachLoop = () => {
    const anArray = ["Banana", "Orange", "Apple", "Mango"];

    anArray.forEach((arrayData) => { //looping array with forEach loop.
        console.log(arrayData);
    })
}
//arrayAndForEachLoop();

/* output 👇*/
/* 
Banana
Orange
Apple
Mango
*/



// 2 -) Show values on the page. for loop 
const forShowOnTheScreen = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fLen = fruits.length;

    let text = "<ul>";
    for (let i = 0; i < fLen; i++) {
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";

    document.getElementById("demo").innerHTML = text;
}
//forShowOnTheScreen();
/* output on the screen*/
/* 
Banana
Orange
Apple
Mango
*/






// forEach loop
// 2 -) Show values on the page.
const forEachShowOnTheScreen = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    let text = "<ul>";
    fruits.forEach(myFunction);
    text += "</ul>";
    document.getElementById("demo").innerHTML = text;

    function myFunction(value) {
        text += "<li>" + value + "</li>";
    }
}
//forEachShowOnTheScreen();
/* output on the screen */
/* 
Banana
Orange
Apple
Mango
*/



const addElementToEndOfArray = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    /* 
    Adding new value to end of an array.
    push() method can take multiple elements.
    */

    array.push(11, 12); //Multiple elements.
    array.push(13); //Single element.
    console.log(array);
}
//addElementToEndOfArray();

/* output 👇*/
/* 
[
   1, 2, 3,  4,  5,  6,
   7, 8, 9, 10, 11, 12,
  13
]
*/






/* !!! Getting undefined values during adding values to array !!! */
const gettingUndefinedValues = () => {
    const fruits = ["Banana", "Orange", "Apple"];
    console.log(fruits);
    fruits[6] = "Lemon";
    console.log(fruits);
}
//gettingUndefinedValues();

//Getting type arrays
const recognizeAnArray = () => {
    const fruits = ["Banana", "Orange", "Apple"];
    //Wrong way 
    console.log(typeof (fruits)); //This line gonna return "object" because in JavaScript all arrays are objects.
    //Right way
    console.log(Array.isArray(fruits)); //This line can be solution if you want to know what is going on.
}
//recognizeAnArray();

/* --- ARRAY METHODS --- */

// toString()
const convertingArrayElementsToString = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits)
    console.log(fruits.toString());
}
//convertingArrayElementsToString();

// join()
const joinElementBetweenAllElementsInTheArray = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits)
    console.log(fruits.join(" - ")); // Can take 1 parameter.
}
//joinElementBetweenAllElementsInTheArray();

// pop() - push() Popping items out of an array, or pushing items into an array.
// pop()
const removingLastItemFromAnArray = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits);
    fruits.pop(); //removedLastItem
    console.log(fruits);
}
//removingLastItemFromAnArray();

// push()
const addingItemsToAnArray = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits);
    fruits.push("Grape", "kiwi"); //added Item to the end, can take multiple parameters
    console.log(fruits);
}
//addingItemsToAnArray();

// shift()
const removingFirstItemFromAnArray = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits);
    const fruit = fruits.shift(); // remove element and return removed element
    console.log(fruit);
    console.log(fruits);
}
//removingFirstItemFromAnArray(); 

// unshift()
const addingElementAtTheBeginning = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits);
    const fruit = fruits.unshift("Lemon", "kiwi"); //The unshift() method returns the new array length.
    console.log(fruit);
    console.log(fruits);
}
//addingElementAtTheBeginning();

// concat()
const concatingArrays = () => {
    const myGirls = ["Cecilie", "Lone"]; //array1
    const myBoys = ["Emil", "Tobias", "Linus"]; //array2
    const myChildren = myGirls.concat(myBoys); // array1 + array2 = array3
    console.log(myChildren);
    const myFruits = ["apple", "banana", "grape", "kiwi"]; // array4
    const myEverthings = myChildren.concat(myFruits); // array3 + array4 = array5
    console.log(myEverthings);
    const mytry = myGirls.concat(myBoys, myFruits); // concat can take multiple parameters
    console.log(mytry);

    const anArray = ["Emil", "Tobias", "Linus"];
    const addingElementToAnArray = anArray.concat("Peter"); // Also we can add item to an array. (in the end)
    console.log(addingElementToAnArray);
}
//concatingArrays();

// splice()
const spliceArray = () => {
    const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(myArray);
    myArray.splice(1, 9); /* splice taking 3 parameters (startIndex, howManyItemsYouWantToRemove) */
    console.log(myArray);
}
//spliceArray();