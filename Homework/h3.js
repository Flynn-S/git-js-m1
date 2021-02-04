/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
function area(l1,l2) {
    const area = l1 * l2;
    return area
}
/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, 
but if the two values are the same then it should return their sum multiplied by 3.
*/
function crazySum(int1,int2) {
    if (int1 === int2) {
        return (int1*int2)*3
    } else {
        return int1*int2
    } 
}

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
function crazyDiff(num) {
    if (num > 19) {
        return (num-19)*3
    } else {
        return (19-num) 
    } 
}
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
function boundary(n) {
    if ((n >= 20 && n <=100) || n ==400) {
        return true
    } else {
        return false
    }
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
function strivify(str) {
    if (str.includes('Strive')) {
        return str
    } else {
        return 'Strive' + str
    }
} 

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
function check3and7 (int) {
    return int % 3 === 0 && int % 7 ===0 ? console.log('Your number is divisible by 3 & 7') : console.log('Your number is NOT divisible by 3 & 7');;
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
function reverseString(string) {
    const str = string.split("");
    // splits str characters into an array
    const revStr = str.reverse();
    // reverses characters in array
    const joinStr = revStr.join("")
    // joins characters back together into a string
    console.log(joinStr) // logs output
}

// YOU COULD ALSO DO THIS WITH A LOOP 

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
function upperFirst(str) {
    const capitalise = str[0].toUpperCase();
    return capitalise + str.slice(1)
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
function cutString(str) {
    return str.slice(1,(str.length-1))

}

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
function giveMeRandom(n) {
    let arr = []
    for (i=0;i<n;i++) {
        arr.push(Math.floor(Math.random() * 10))
    }
    return arr
}


/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
