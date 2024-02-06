// Basics of JavaScript

/*
    This sign makes a multi line comment

    Primitive data types in JS: strings, integars, booleans, floats, arrays, objects, (very similar to python dictionaries)
    functions in JS 
    Loops
    Scripting vs Programming language
*/

// string variables

var first_name = 'Zack';

// discplay the value in JS
console.log(first_name)

//  assign an integar 
var some_number = 32;
console.log(some_number)

//  show all attributes of a document or id
console.dir(document)

//  floats
var some_float= 3.141592;
console.log(some_float)

// array
var some_array = [1,2,3,4];
console.log(some_array)

var some_object = {'yee': 'haw'}
console.log(some_object)

// JS hoisting

a_num = 10
console.log(a_num)
var a_num
console.log(a_num)

console.log(some_random_variable)
var some_random_variable = 'This is random'
console.log(some_random_variable)

// a better way of declaring a variable is by using "let" or "const" keywords 

let x;
console.log(x)
x = 10 
console.log(x)

const y = 5;
console.log(y)
// y = 6;
// console.log(y) // throws an error because a const cannot be changed!

// VIDEO BREAK 1

// basic math operations

// addition 
let sum = 5+5;
console.log(sum)

// subtraction 
let diff = 5-4;
console.log(diff)

let diff1 = 5
let diff2 = 4
console.log(diff1-diff2)

// Mutiplication & division are the same as Python, exponents as well

// some other math operations
// finding the floor of a decimal
let find_floor = Math.floor(5.8)
console.log(find_floor)
// alternatively math.ceiling brings back the ceiling

// mind bender 
let crazy_stuff = some_float + '4';
console.log(crazy_stuff)

// mind bender 2 
let crazy_stuff_2 = some_float + parseFloat('4')
console.log(crazy_stuff_2)

//  redeclaration of variables
var red_ranger = 'Jason'
var red_ranger = 'Tommy'
console.log(red_ranger)

//  using the let keyword for the same
let nba_goat = 'Michael Jordan'
console.log(nba_goat)

nba_goat = 'Kobe'
console.log(nba_goat)

//  dont retype let on later variable changes

// -------------------------------------------------------------------------------------Important Stuff------------------------------------------------------------

// regular named fuctions
function addNums() {
    let num = 5;
    let num1 = 4;

    return num + num1
}

// -------------------------------------------------------------------------------------Important Stuff------------------------------------------------------------

console.log(addNums())

let addNums2 = function(num, num2) {
    return num + num2
}

console.log(addNums2(6,7))
// -------------------------------------------------------------------------------------Important Stuff------------------------------------------------------------

// ES6+ arrow function in JS
// our first example shows how to use a single parameter in an arrow function without parentheses
// This can only be done with one parameter if you dont want to use parentheses
let cubed = num => {
    return num**3
}

console.log(cubed(4))
// ---------------------------------------------------------------------------------------------------------

let cubed2 = (num) => {
    return num**3
}

console.log(cubed2(4))
// ---------------------------------------------------------------------------------------------------------
// if you have multiple parameters you must use parentheses
let toThePower = (num, power) => {
    return num **power
}

console.log(toThePower(4,3))
// -------------------------------------------------------------------------------------Important Stuff------------------------------------------------------------

console.log((function(name){
    let hello = 'Hello ' + name
    return hello
})('Joel'))
// ---------------------------------------------------------------------------------------------------------

// control flow
// if statements
function determineAge(age){
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 && age < 65){
        return 'Adult'
    } else {
        return 'Senior'
    }
}

console.log(determineAge(17))
// ---------------------------------------------------------------------------------------------------------

// ternary operators 
function determineAge2(age){
    return (age < 18) ? 'Minor' : (age >= 18 && age <=65) ? 'Adult not retired' : 'Elderly person'
}

console.log(determineAge2(5))
// ---------------------------------------------------------------------------------------------------------

// loops
function countByOne(){
    for (let i = 0; i <= 20; i ++){
        console.log(i)
    }
    return 'Counting has stopped'
}

console.log(countByOne())
// ---------------------------------------------------------------------------------------------------------

function decreaseByOne(){
    for(let i = 20 ; i >= 0 ; i --){
        console.log(i)
    }
    return 'All done'
}

console.log(decreaseByOne())
// ---------------------------------------------------------------------------------------------------------

function countWithWhile(){
    let i =0;
    let text = '';
    while(i <= 10){
        text += `this number is ... ${i} \n`;
        i++
    };
    return text;
}
console.log(countWithWhile())

// ---------------------------------------------------------------------------------------------------------

function countWithDoWhile(){
    let i = 0;
    let text = '';

    do {
        text += `This number is... ${i} \n`;
        i++
    }
    while (i <= 10)
    return text
}

console.log(countWithDoWhile())
// ---------------------------------------------------------------------------------------------------------

// create am array
let groupOfNames = ['jerry', 'ben', 'bAsh', 'Brock', 'Misty']
console.log(groupOfNames[3])

let terry, ben, misty;
[terry, misty, ben] = groupOfNames
console.log(terry, ben, misty)
console.log(groupOfNames)
console.log(ben)
    
// ---------------------------------------------------------------------------------------------------------
// method 1 for looping through an array
function showAllNames(){
    for(let i = 0; i < groupOfNames.length; i++){
        console.log(groupOfNames[i])
    }
    return 'done'
}

console.log(showAllNames())

// method 2
console.log(groupOfNames.forEach(element => console.log(element)))

// JS array method: array.toString()
console.log(groupOfNames.toString())
console.log(typeof(groupOfNames.toString()))
console.log(typeof(groupOfNames))
// ---------------------------------------------------------------------------------------------------------
// more methods: map, filter, reduce

// .map()
let b_names = groupOfNames.map(i => {
    if (i[0] == 'B'){
        return i
    } else {
        return false
    }
})

console.log(b_names)
// ---------------------------------------------------------------------------------------------------------
// long form of .map()
let b_names_test = function() {
    let test_array = [];
    for (let i = 0; i < groupOfNames.length; i++) {
        if(groupOfNames[i][0] == 'b'){
            test_array.push(groupOfNames[i])
        }
    }
    return test_array
}

console.log(b_names_test())
// ---------------------------------------------------------------------------------------------------------

// .filter()

let long_names = groupOfNames.filter(element => element.length > 4)
console.log(long_names)

// ---------------------------------------------------------------------------------------------------------

// .reduce()

const nums = [2,4,6,8,10]

let nums_reduced = nums.reduce( (accumulator, current_num) => {
    return accumulator + current_num
})
console.log(nums_reduced)

// you can also use methods like .join, .slice, .search, .splice


// ================================================================Exercise 1=================================================================================================
let dog_names = ['spot', 'rex', 'lily', 'Kiwi', 'Misty']
let pet_names = dog_names.map(i => {
    if (i == 'Kiwi'){
        return i
    } else {
        return 'No match'
    }
})
console.log(pet_names)

// ================================================================Exercise 2=================================================================================================

let arr = [4, 5, 7, 8, 14, 45, 76];
function even(InputArray) {
  
    for (var i = 0; i < InputArray.length; i += 2) {
        InputArray.splice(i ,1,'even index');
    }
    console.log(InputArray);
}
even(arr)
