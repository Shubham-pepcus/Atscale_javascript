//07-07-2023//using console.log and alert pop-up
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!');

//getting the value as single number
console.log(40 + 8 + 23 - 10);

//to get output as string use ''
console.log("Jonas");
console.log(23);

// Naming Convention of variables
let firstName = "Matilda";
console.log(firstName);

let last_name = "John";
console.log(last_name);

let PI = 3.1415;

let myFirstJob = 'Tester';
let myCurrentJob = 'QAEngineer';

console.log(myCurrentJob);

//10-07-2023// Boolean 
let javascriptIsFun = true;
console.log(javascriptIsFun);

//typeof
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

//reAssigning the value to a variable or mutate the variable
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

//undefined
let year;
console.log(year);
console.log(typeof year);
//Mutating the variable
year = 1991;
console.log(typeof year);

//typeof null gives the output as object but should be undefined which is a bug
console.log(typeof null);

//Declaring the variables
//Use 'let' if the value of the variable will be changed in the near future
let age = 30;
age = 32;
console.log(age)
// When the variable has a permanent value use "const" for the declaration
const birthYear = 1991;
//The use of "var" for declaration should be avoided in modern programming
//as the "var" works more like the "let" keyword.

//Basic Operators 
//1) Mathematical or the Arithmetic operator
//use of the Minus(-) operator
const now = 2023;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
//use of the Multiplication (*) operator
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); //2**3 means 2 to the power 3 i.e. 2*2*2
//use of the Addition (+) Operator
console.log(49 + 32 + 17);
//Addition (+) operator can also be used to concatenate the strings
const first_Name = 'Dominic';
const lastName = 'Toretto';
console.log(first_Name + " " + lastName);

//2)Assignment (=) Operator
let x = 10 + 5; //15
x += 10; //x = x+10 = 25
x *= 4; //x = x*4 = 100
x++; // x = x+1 = 101
x--; // x = x-1 = 100
console.log(x);

//3)Comparison Operators
console.log(ageJonas > ageSarah); // < , <= , >= 
console.log(ageSarah >= 3);

const isFullAge = ageSarah >= 3;

console.log(now - 1991 > now - 2018);

//Operator Precedence
let z, y;
z = y = 25 - 10 - 5; // z = y = 10, z = 10
console.log(z, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);

//11-7-2023//Strings and Template Literals (type coercion)
const nameOfThePerson = "Dr. S V Radhakrishnan";
const job = 'teacher';
const birth_Year = 1991;
const currentYear = 2023;
//representation of normal strings
const drRadha = "I'm " + nameOfThePerson + ', a ' + (currentYear - birth_Year) + ' years old ' + job + '!';
console.log(drRadha);
//Template strings are used with the syntax ` ${} `
const drRadhaNew = `I'm ${nameOfThePerson}, a ${currentYear - birth_Year} year old ${job}!`;
console.log(drRadhaNew);
//Template strings are also used to create multiline strings
console.log(`Strings with
multiple
lines`);
//Backticks can also be used to present a regular string
console.log(`Just a regular string...`);

//Taking decisions: If / else statements
//Example#1
const yourAge = 15;
if (yourAge >= 18) {
    console.log('You can apply for driving license');
} else {
    const yearsLeft = 18 - yourAge;
    console.log(`You are too young. Wait for another ${yearsLeft} years.`);
}

//Example#2
const someBirthYear = 2012;
let century;
if (someBirthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//Type Conversion and type coercion
//#type conversion(Manual conversion of one type to another)
//String to a Number
const inputYear = '1991';
console.log(inputYear);//this will give the output in string
console.log(Number(inputYear));//here the String is converted to Number
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);//this will only detect the value as a string and give the concatenated output
console.log(Number(inputYear) + 18); //after converting will perform the Arithmetic Operation

//Number to a String
console.log(23);// output is a number
console.log(String(23));// here the Number is converted to a String

//12-07-2023//#type coercion(Automatic conversion of one tyoe to another)
console.log('I have ' + 3 + ' years of experience.');
// in the above example the number 3 is converted into a string and then perform the concatenation
console.log('23' + '10' + 3);
// coercion doesn't work for the Strings that contain numbers as in above; It will only convert no. 3 to string and give the concatenated output 

//But for the Minus(-), Multipication(*) and the Division(/), the coercion will convert the strings that contain Numbers to Numbers and perform the Operations Accordingly.
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');
console.log(2 + 3 + 4 + '5');//this will actually add up all the Numbers first(2,3,4) and then convert the result number 9 to string and then concatenate with 5.
console.log('10' - '4' - '3' - 2 + '5');

//  Truthy and Falsy Values
//falsy values are the values that become false when we convert them into boolean
//truthy values are the values that wll be converted to true
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jack'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('Get some Money before Spending!');
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

//************************************************************************ */
//13-07-2023
//Equality Operators == vs. ===
const theAge = '18';
if (theAge == 18) console.log('You just became an Adult :D');// this is the loose equality operator
if (theAge === 18) console.log('You just became an Adult :D'); // this is the strict equality operator

//Prompt function 
//SYNTAX - prompt('string');
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23)
    console.log('Cool! 23 is an amazing number!');
else if (favourite === 7) {
    console.log('Cool! 7 is also an amazing number!');
} else if (favourite === 9) {
    console.log('Cool! 9 is also an amazing number!');
} else {
    console.log('Number is not 23 or 7 or 9')
}
// to check if the no. is different than 23 or not equal(!==)
if (favourite !== 23) console.log('Why not 23?');

//Boolean Logic are the "AND", "OR" & "NOT" operators
//Logical Operators
//Example#1
const hasDriversLicense1 = true;
const hasGoodVision1 = false;

console.log(hasDriversLicense1 && hasGoodVision1);
console.log(hasDriversLicense1 || hasGoodVision1);
console.log(!hasDriversLicense1);

if (hasDriversLicense1 && hasGoodVision1) {
    console.log('Sarah is able to DRIVE!')
} else {
    console.log('Someone else should drive...')
}

//Example#2
const hasDriversLicense2 = true;
const hasGoodVision2 = false;
const isTired = false;

console.log(hasDriversLicense2 && hasGoodVision2 && isTired);
console.log(hasDriversLicense2 || hasGoodVision2);
console.log(!hasDriversLicense2);

if (hasDriversLicense2 && hasGoodVision2 && !isTired) {
    console.log('Sarah is able to DRIVE!')
} else {
    console.log('Someone else should drive...')
}

//Example#3
const day1 = "monday";

if (day1 === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day1 === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day1 === 'wednesday' || day1 === 'thursday') {
    console.log('Write code examples');
} else if (day1 === 'friday') {
    console.log('Record videos');
} else if (day1 === 'saturday' || day1 === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!')
}

//************************************************************************ */
//14-07-2023

//The Switch Statement
const day = "friday";

switch (day) {
    case 'monday': //day==='monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case "friday":
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break
    default:
        console.log('Not a valid day!');
}

//Statements and Expressions
//Expressions - It is a piece of code that produces a value
//example: 3+4 ; 1991; true && false && !false; (23>10)

//Statements - bigger piece of code that is executed but not produce any value
//example: if/else statements that translates the actions

//The Conditional/Ternary Operator
//the ternary operator is an expression that helps us to write something similar to the if/else statement but all in one line.
//code without the use of ternary operator
const legalAge = 23;
let drink1;
if (age >= 18) {
    drink1 = 'wine';
} else {
    drink1 = 'water'
}
console.log(drink1);

//code with the use of ternary operator
const drink2 = legalAge >= 18 ? 'wine' : 'water';
console.log(drink2);

//ternary operators can be useful to put the conditionals like if/else in the template literals
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
//if/else statements are better suited when we have a biggger block of code that we need to execute based on a condition.
//the ternary operators are perfect when we just need to take a quick decision.

//CONTINUED IN THE FUNDAMENTALS PART2 

