//Coding Challenge #1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

const markHigherBMI = (BMIMark > BMIJohn);
console.log(markHigherBMI);

//Coding Challange #2
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}

//Coding Challenge #3
let dolphins1 = 96;
let dolphins2 = 108;
let dolphins3 = 89;

let koalas1 = 88;
let koalas2 = 91;
let koalas3 = 110;

const scoreDolphins = (dolphins1 + dolphins2 + dolphins3) / 3;
const scoreKoalas = (koalas1 + koalas2 + koalas3) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy")
} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy")
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy!")
}

//Coding Challenge #4
const bill = 275;

let tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


