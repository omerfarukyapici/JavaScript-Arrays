/* --------- JavaScript Arrays --------- */

//🔔🔔👉👉👇👇👇📌📌📌

//Basic array and looping 
const basicArrayAndLooping = () => {
    const array1 = [0, 1, 2, 3, 4, 5];
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

//Getting type of arrays
const gettingTypeOfAnArray = () => {
    const fruits = ["Banana", "Kiwi", "Apple"];
    //Wrong way -> This line gonna return "object" because in JavaScript all arrays are objects.
    console.log(typeof (fruits));
    //Right way -> This line can be the solution if you want to know the array or not.
    console.log(Array.isArray(fruits));
}
//gettingTypeOfAnArray();

//output 👇
/* 
object
true
*/

/* --- ARRAY METHODS --- */
// toString()
const convertingArrayElementsToString = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits);
    console.log(fruits.toString());
}
//convertingArrayElementsToString();
// output 👇
/* 
[ 'Banana', 'Orange', 'Apple', 'Mango' ] -> before toString()
Banana,Orange,Apple,Mango -> after toString() 
*/

// join()
const addElementBetweenAllElements = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits)
    console.log(fruits.join(" - ")/* <- Can take 1 parameter. */);
    //While adding elements also converts array elements to String.
}
//addElementBetweenAllElements();
//output 👇 
/* 
[ 'Banana', 'Orange', 'Apple', 'Mango' ]
Banana - Orange - Apple - Mango
*/

// pop();
const removingLastItemFromAnArray = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits);
    const popped = fruits.pop(); //remove last item
    console.log(popped); //show removed item 
    console.log(fruits);
}
//removingLastItemFromAnArray();
//output 👇
/* 
[ 'Banana', 'Orange', 'Apple', 'Mango' ] -> before pop();
Mango -> Popped element.
[ 'Banana', 'Orange', 'Apple' ] -> after pop();
*/

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
    // remove first ıtem and return removed ıtem
    const fruit = fruits.shift();
    console.log(fruit);
    console.log(fruits);
}
//removingFirstItemFromAnArray(); 
// output👇
/* 
[ 'Banana', 'Orange', 'Apple', 'Mango' ] -> before shift();
Banana -> ıtem which removed
[ 'Orange', 'Apple', 'Mango' ] -> after shift();
*/

// unshift()
const addingItemAtTheBeginning = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits);
    // method can take multiple parameters👇
    const fruit = fruits.unshift("Lemon", "kiwi");
    //The unshift() method returns the new array length.
    console.log(fruit);
    console.log(fruits);
}
//addingItemAtTheBeginning();
// output👇
/* 
[ 'Banana', 'Orange', 'Apple', 'Mango' ] -> before unshift();
6 -> after unshift() we can take the array length.
[ 'Lemon', 'kiwi', 'Banana', 'Orange', 'Apple', 'Mango' ] -> result
*/

// concat()
const concatingArrays = () => {
    //array1
    const myGirls = ["Cecilie", "Lone"];
    //array2
    const myBoys = ["Emil", "Tobias", "Linus"];
    // array1 + array2 = array3
    const myChildren = myGirls.concat(myBoys);
    console.log(myChildren);
    // array4
    const myFruits = ["apple", "banana", "grape", "kiwi"];
    // array3 + array4 = array5
    const myEverthings = myChildren.concat(myFruits);
    console.log(myEverthings);
    // concat can take multiple parameters
    const girlsBoysFruits = myGirls.concat(myBoys, myFruits);
    console.log(girlsBoysFruits);
    const anArray = ["Emil", "Tobias", "Linus"];
    // Also we can add an item to an array. (in the end)
    const addingElementToAnArray = anArray.concat("Peter");
    console.log(addingElementToAnArray);
}
//concatingArrays();
// output 👇
/* 
[ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]
[
  'Cecilie', 'Lone',
  'Emil',    'Tobias',
  'Linus',   'apple',
  'banana',  'grape',
  'kiwi'
]
[
  'Cecilie', 'Lone',
  'Emil',    'Tobias',
  'Linus',   'apple',
  'banana',  'grape',
  'kiwi'
]
[ 'Emil', 'Tobias', 'Linus', 'Peter' ]
*/

// splice()
const spliceArray = () => {

    // 1 -) Remove and add element
    const myArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(myArray1);
    /* splice can take 2 - 3 parameters or more (startIndex, howManyItemsYouWantToRemove), (newElements) */
    const spliceMyArray1 = myArray1.splice(1/*startIndex*/, 9/*removeThismuch*/, "new1", "new2", "new3" /*addAllThese*/);
    console.log(spliceMyArray1);
    console.log(myArray1);

    // 2 -) Dont remove item but add items
    const myArray2 = [1, 2, 3, 4, 5, 6];
    console.log(myArray2);
    const spliceMyArray2 = myArray2.splice(1, 0, "new1", "new2", "new3")
    console.log(spliceMyArray2)
    console.log(myArray2);
}
//spliceArray();
//output 👇
/* 
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10 
]
[
  2, 3, 4,  5, 6,
  7, 8, 9, 10
]
[ 1, 'new1', 'new2', 'new3' ]
[ 1, 2, 3, 4, 5, 6 ]
[]
[
  1,      'new1', 'new2',    
  'new3', 2,      3,
  4,      5,      6
]
*/

//slice()
const sliceArray = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    /* 
    Method can take 2 parameters first one is start index
    and included, second one is finish index and not
    included to slice output.
    */
    const slicing = array.slice(3, 6);
    console.log(slicing);// Not removing just slicing
    const slicingTwo = array.slice(-4);// Take last 4 value from array
    console.log(slicingTwo);
    const slicingThree = array.slice(1);// Start from 1 and take all
    console.log(slicingThree);
    console.log(array);// Same array not messed up
    const string = "OmerFarukYapici";
    console.log(string.slice(4));// Can use with string as well
}
//sliceArray();
/* 
output👇
[4, 5, 6] <- slice array
[6, 7, 8, 9] <- last 4 value
[2, 3, 4, 5, 6, 7, 8, 9] <- last 8 value
[1, 2, 3, 4, 5, 6, 7, 8, 9] <- original array
FarukYapıcı <- using with string
*/

//copyWithin(target, start, end)
const copyWithinMethod = (array) => {

    return array.copyWithin(0, 3, 4);
}
//console.log(copyWithinMethod([1, 2, 3, 4, 5]));
/* 
output👇
[ 4, 2, 3, 4, 5 ]
*/

//at()
const atMethod = (array, index) => {

    return `Using an index of ${index} the item returned is ${array.at(index)}`;
}
//console.log(atMethod([1, 2, 3, 4], 3));
/* 
output👇
Using an index of 3 the item returned is 4
*/

//entries()
const entriesMethod = array => {
    //We can access the index of values with entries() method.
    for (const element of array.entries()) {
        console.log(element)
    }
}
//entriesMethod(["Omer", "Faruk", "Yapici"]);
/* 
output👇
[ 0, 'Omer' ]
[ 1, 'Faruk' ]
[ 2, 'Yapici' ]
*/

//every()
const everyMethod = array => {
    /* 
    Every() method is the test for all array elements,
    If all elements does pass the test, the result is true.
    If all elements doesn't pass the test, the result will be false. 
    */
    return array.every(numbers => {
        return numbers < 18;
    })
}
//console.log(everyMethod([5, 4, 3, 7, 13]));
/* 
output👇
true
*/

//fill()
const fillMethod = () => {
    const array = ["string", 2, true, ["array"], { name: "object" }];
    array.fill(1); //Change all elements with 1
    console.log(array);

    const arrayTwo = [1, 2, 3, 4, 5];
    arrayTwo.fill("changed", 3/*Start here*/, 4/*Stop here*/);
    console.log(arrayTwo);
}
//fillMethod()
/* 
output👇
[ 1, 1, 1, 1, 1 ] <- With one parameter
[ 1, 2, 3, 'changed', 5 ] <- With three parameters 
*/

//filter() 
const filterMethod = array => {

    const filterArray = number => { //filter function
        return number > 3
    }

    return array.filter(filterArray); //pass filter function
}
//console.log(filterMethod([1, 2, 3, 4, 5]));
/* 
output👇
[ 4, 5 ] 
*/

//find()
const findMethod = () => {
    const persons = [
        { name: 'Luke Skywalker', height: '172', },
        { name: 'Darth Vader', height: '202', },
        { name: 'Anakin Skywalker', height: '188', },
    ];
    const findTallGuy = person => { //find function
        return person.height > 200
    }
    return persons.find(findTallGuy) //pass function
}
//console.log(findMethod());
/* 
output👇
{ name: 'Darth Vader', height: '202' }
*/



//map()
const persons = [
    { name: 'Luke Skywalker', height: '172', },
    { name: 'Darth Vader', height: '202', },
    { name: 'Anakin Skywalker', height: '188', },
];
const mapMethod = array => {
    array.map(data => {
        console.log(data.name);
    })
}
mapMethod(persons);
/* 
output👇
Luke Skywalker
Darth Vader
Anakin Skywalker
*/






