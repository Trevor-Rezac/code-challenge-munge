/*
For this first set of functions, assume the input array looks like this:

const petsArray = [
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
];

findByName('jumpy', petsArray)

OUTPUT: 
{ name: 'jumpy', type: 'frog' }
*/

export function findByName(name, arr) {
    const pet = arr.filter(petName => petName.name === name);
    return pet[0];
}

/*
OUTPUT: 
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },

]*/

export function getDogs(arr) {
    const dog = arr.filter(pet => pet.type === 'dog');
    return dog;
}

/*
OUTPUT: 
['spot', 'rover']
*/

export function getNamesOfDogs(arr) {
    const dogs = arr.filter(pet => pet.type === 'dog');
    const names = dogs.map(dog => dog.name);
    return names;
}


/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const names = arr.map(pet => pet.name);
    return names;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const petTypes = arr.map(pet => pet.type);
    const reverseArr = petTypes.reverse(pet => pet.type);
    return reverseArr;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const spanishArr = arr.map(pet => ({
        nombre: pet.name,
        tipo: pet.type,
    }));

    return spanishArr;
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    const isHungryArr = arr.map(pet => ({
        name: pet.name,
        isHungry: true,
        type: pet.type,
    }));
    return isHungryArr;
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    const shoutingArr = arr.map(pet => ({
        name: pet.name.toUpperCase(),
        type: pet.type,
    }));
    return shoutingArr;
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    const stringArr = arr.map(pet => (`${pet.name}${pet.type}`));
    return stringArr;
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    const arrayArr = arr.map(pet => ([[
        'name',
        pet.name,
    ], [
        'type',
        pet.type,
    ]]));
    return arrayArr;
}

////////////////////////////////////////////////////////

/*
For the next set of functions, assume the following input:

[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'truck', make: 'ford', model: 'bronco', age: 5 },
    { type: 'truck', make: 'chevy', model: 'silverado', age: 2 },
    { type: 'van', make: 'chevy', model: 'express', age: 1 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },
]
*/

/*

Output: 
[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },    
];
*/

export function getCars(arr) {
    const vehicles = arr.filter(vehicle => vehicle.type === 'car');
    return vehicles;
}

/*
Output:
[
        { type: 'car', make: 'chevy', model: 'malibu' },
        { type: 'car', make: 'chevy', model: 'camero' },
] ;

*/

export function getChevyCars(arr) {
    const vehicles = arr.filter(vehicle => vehicle.type === 'car');
    const chevyCars = vehicles.filter(vehicle => vehicle.make === 'Chevy');
    return chevyCars;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Stretch Goals!

/*
Output:
'taurusmalibubroncosilveradoexpresscamero'
 */

export function makeModelsStringWithReduce(arr) {
    return '';
}

/*
(add all ages)

Output: 14 
 */

export function getSumOfAges(arr) {
    return 0;
}

/*

Output: 
{
    car: 3,
    truck: 2,
    van: 1
}
 */

export function makeCountObject(arr) {
    return {};
}


/*

Output: 
(order doesn't matter--but the string must include all keys for the first object in the array)
'typemakemodelage'
 */


export function makeKeysString(arr) {
    return '';
}
