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
