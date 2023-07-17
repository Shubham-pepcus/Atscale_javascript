const country = 'India';
const continent = 'Asia';
let population = 1393.4;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = true;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "English";

let firstHalf = secondHalf = population / 2
console.log(firstHalf);

let increPopulation = Population++;

const finland = 6;
console.log(population > finland);

const avgCountryPopulation = 33;
console.log(population < avgCountryPopulation);

const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);

//Template Literals
const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(descriptionNew);

//taking decisions
if (population > 33) {
    console.log(`Portugals's population is above average`);
} else {
    console.log(`Portugal's population is 22 million below average`);
}

//Type conversion and type coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//Equality operator
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders')
}

//Logical operators
if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} doesn't meet your criteria`);
}

//The switch statement
switch (languageSpoken) {
    case 'chinese':
    case 'mandarin':
        console.log('Most number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers')
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':


    default:
        break;
}

