// Create a random number between 1 to 15
//for each number assign the proper binary in a switch statement
// 1 = 0001
// 2 = 0010
// Go tiger!NO CHEATING!

let random = Math.floor(Math.random() * 16);
let binArray = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"]
let binary;

switch (random) {
    case (random):
        binary = `${random} = ${binArray[random]}`;
        break;
    default:
        binary = "Something went wrong";
}
console.log(binary);


// Exercise JS Weekday/number
// Given the number of the day of the week, return the name of the weekday. Maybe you can use a switch for this task.
// Input: Number of the Day of the weekdays
// Output: Name of the Weekday

const day = new Date().getDay();
const week = ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saterday"];

let today;
switch (day) {
    case day:
        today = `Today is ${week[day]}`;
        break;
    default:
        today = "Not on this planet";
}

console.log(today);


///Zoo Animal menagerie // You are a group of people who want to go to the zoo. One student, one child, uncle unemployed. The prices are: for student 10.30 euros, for children 5.10 euros, unemployed with berlin pass 3.55 euros. Find out and log it, using the math object who pays the most, and round it up. 
const student = 10.3;
const child = 5.1;
const unemployed = 3.55;
const paysMost = Math.ceil(Math.max(student, child, unemployed));
console.log(`The highest price is €${paysMost} (rounded up)`);

// Now that you are in the zoo, find out and log it, using the date object, if it's day or night. Using an if else statement and the result of the day object, determine if its day or night. From 8h to 20h is day, otherwise it's night. Save this result on a variable. 
const hour = new Date().getHours();
const dayTime = hour >= 8 && hour <= 19;
let result;
if (dayTime) {
    result = "day-time";
    console.log("It is day-time");
} else {
    result = "night-time";
    console.log("It is night-time");
}
// Using this variable within a switch statement, put the animals in the correct array element location: ["pettingZoo", "sleepingHouse","escaped"]. //If it's day put the animals in the petting zoo, if it's night put the animals in the sleeping house, if it's neither of those they 've escaped.
const animals = "fbw-13b";
const locations = ["pettingZoo ", "sleepingHouse ", "escaped "]
switch (result) {
    case "day-time":
        locations[0] += animals;
        break;
    case "night-time":
        locations[1] += animals;
        break;
    default:
        locations[2] += animals;
}
console.log(locations);


// Digital Dice Game :))
//Create a random number between 1 and 6 and assign it to a variable.
// And now assign to every number a different string in a switch statement.
// Example: 1 = "move one step".

const diceResult = Math.floor(Math.random() * 6 + 1);
switch (diceResult) {
    case 1:
        console.log("Move 1 step");
        break;
    case diceResult:
        console.log(`Move ${diceResult} steps`);
        break;
    default:
        console.log("Something went horribly wrong!");
        break;
}
//Do the code in less than 20 lines (uncommented lines).
