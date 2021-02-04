/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[ 1 , 3, 5] ==> [5 , 3, 1]
*/

const arr = [1,3,5,6,10,202];

console.log(arr.reverse()); 

/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/
console.log(Math.max(...arr));
/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/
console.log(Math.min(...arr));
/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/
console.log(arr.filter(number => number %2 ==0));
/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write the code to delete even entries from an array.
*/
arr.splice(number => number %2 ==0);
console.log(arr);
/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/
let string = "this is a string";

let vowels = ['a','e','i','o','u']

const splitString = string.split('')

function isVowel(str) {
    if (str in vowels) {
        return false
    } 
}
console.log(splitString);
splitString.map(string => string in vowels);

//splitString.splice(string => string in vowels);


const joinedString = splitString.join('');

console.log(joinedString);
// GOT STUCK ON THIS ONE

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/
let arr1 = [5,6,9,11,14]


/* WRITE YOUR CODE HERE */

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: [ "strive", "is", "good"] => [ 5 , 2, 4]
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code via Eduflow to the tutor! In the next days we'll also learn how to use GIT 
*/