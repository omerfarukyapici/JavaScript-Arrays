/* --- FİLTER METHOD JAVASCRİPT --- */
const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


//map()
//1 -) Get an array of all names
const names = characters.map(data => {
    return data.name;
});
console.log(names);
//2 -) Get an array of all heights
const heights = characters.map(data => data.height);
console.log(heights);
//3 -) Get an array of objects with just name and height properties
const namesHeights = characters.map(data => ({
    name: data.name,
    height: data.height
}));
console.log(namesHeights)
//4 -) Get an array of all first names
const firstNames = characters.map(data => data.name.split(" ")[0]);
console.log(firstNames)

//reduce()
//1 -) Get the total mass of all characters
//2 -) Get the total height of all characters
//3 -) Get the total number of characters in all the character names
//4 -) Get the total number of characters by eye color (hint. a map of eye color to count)

//filter()
//1 -) Get characters with mass greater than 100
const filterCharactersMass = characters.filter(character => {
    return character.mass > 10; 
})
/* console.log(filterCharactersMass); */
//2 -) Get characters with height less than 200
const filterCharacterHeight = characters.filter(character => {
    return character.height > 150;
})
/* console.log(filterCharacterHeight); */
//3 -) Get all male characters
const filterMaleCharacter = characters.filter(characters => {
    /* return characters.gender == "male" && characters.eye_color == "blue"; */
    return characters.gender === "male" ;
})
/* console.log(filterMaleCharacter); */
//4 -) Get all female characters
const filterFemaleCharacter = characters.filter(characters => {
    return characters.gender === "male" 
})
//console.log(filterFemaleCharacter);

//sort()
//1 -) Sort by name
//2 -) Sort by mass
//3 -) Sort by height
//4 -) Sort by gender

//every()
//1 -) Does every character have blue eyes?
//2 -) Does every character have mass more than 40?
//3 -) Is every character shorter than 200?
//4 -) Is every character male?

//some()
//1 -) Is there at least one male character?
//2 -) Is there at least one character with blue eyes?
//3 -) Is there at least one character taller than 200?
//4 -) Is there at least one character that has mass less than 50?