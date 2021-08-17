/*
Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
*/
//MyAge is constant because (in this case) we will never change the value
const myAge = 24;
//earlyYears is a regular variable because it will change
let earlyYears = 2;
//multiply earlyYears by 10.5
earlyYears*=10.5
/* this can also be done with:
earlyYears = earlyYears * 10.5
*/
//laterYears also changes, and is set using myAge
let laterYears = myAge-2;
//multiply laterYears by 4 to caluclate the dog years
laterYears*=4
/* this can also be done with:
laterYears = laterYears * 4
*/
// age in dog years computed from early and late
const myAgeInDogYears = earlyYears + laterYears
//write your name and lowercases it
const myName = "Jaya Bharathi".toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)