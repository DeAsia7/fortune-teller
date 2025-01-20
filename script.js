// jslab 2

function fortuneTeller(name, age) {
    let fortune = " ";

    console.log("Welcome to Fortune Cookie!")

    let name = prompt("What is your name?");
    let age = prompt("How old are you?");
    
    age = number(age); //changing it so its recognized as a number
    
    console.log(fortuneTeller(name, age));
    
if (name.lenght > 7) {
    fortune += name will marry late in life."

} else if (name.length < 5) {
    fortune += name " will marry within a year.";

} else if (name.lenght >= 5 && name.lenght <= 7) {
    fortune =+ name + " will encounter a once-in-a-lifetime opportunity."
} 


if (name[0].toUpperCase() == "R") {
    fortune += " will be rich."
}
if (name.includes("i")) {
    fortune += " will fall in love this week."
}


if (age % 2 === 0)  //even number age divide by 2 and no remainder
{
    fortune += " will make a new friend this year."
}

if (age % 5 === 0)  //multiple of 5
{
    fortune += " will travel to a new country this year."
}

if  (age % 2 !== 0){  //odd number age divide by 2 and remainder

    fortune += " will meet someone special this year."
}

return fortune; //returning the fortune
}


/*
If the name is longer than 7 characters: "will marry late in life."
If the name is shorter than 5 characters: "will marry within a year."
If the name is between 5 and 7 characters (inclusive): "will encounter a once-in-a-lifetime opportunity."
If the first letter of the name is 'R': "will be rich."
If the name contains the letter 'i': "will fall in love this week."
*/

/*
use own rules
If the age is less than 18: "will achieve something great in their studies."
If the age is between 18 and 30: "will soon find their dream job."
If the age is greater than 30: "will experience financial success soon."

If the age is a multiple of 5: "will travel to a new country this year."
If the age is an odd number: "will meet someone special this year."
If the age is an even number: "will make a new friend this year."
*/

/* key functions
.length --> length of a string
let message = "hello!"
message.length will equal to 6
tells you amount of characters in a string. the ""

.includes --> tells you if string contains a certain character
returns true or false
let message = "coding"
message.includes("i") will return true
message.includes("z") will return false

.toupperCase() --> changes string "" to uppercase
.toLowerCase() --> changes string "" to lowercase

acessing specific letter inside a string 
let messgae = "hello"
--treat string as an array
array starts at 0
message[0] will print "h"
console.log(message[0]) will print "h"
*/


