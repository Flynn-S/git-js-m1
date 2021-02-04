/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain concepts as you are speaking to a 12 years old
*/
/* There are 6 main datatypes in JavaScript: Numbers, Strings, Booleans, Undefined, Symbol & BigInt.
1.) The 'Number' data type include all positive and negative intergers and floating 
(decimal point numbers) in a range up to 2 to the power of 53. 
Numbers can be manipulated and changed using mathematical operators (+-/*)

2.) The 'String' data type represents words or letters (textual data). 
Strings in Javascript cannot be modified, but can be added together (concatination) or 
subtracted from by creating sub-strings.    

3.) The 'Boolean' data type represents two values; True and False. 
These are logical operators that help us make computational decisions with our code. 

4.) The 'BigInt' data type is not used as commonly as the main 3, but is loosely equal to a 'Number' data type. 
It is used to operate on numbers outside of the safe intefer limit for numbers. 
We create BigInt's by appending 'n' to the end of an integer.

5.) Symbol data type
I don't fully understand these yet, but they are primarily used as an identifier for object properties.
Everytime 'Symbol' is used, it creates a new unique symbol identifier, so Symbol("hello") !=== Symbol("hello")

6.) Undefined
Finally the 'Undefined' data type is a produced when a variable has not been assigned a value. 
*/

/* EXERCISE 2
Describe what is a variable. Try to explain the concept as you are speaking to a 12 years old
*/

/* A variable is a saved piece of data that we have labelled for ease of use and so it can be re-called at our convience. */

/* EXERCISE 3
Write the code to execute a SUM between the number 12 and 20.
*/
const sum = 12 + 20
console.log(sum);
/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Create a variable named x containing the number 12.
*/
let x = 12 
console.log(x);
/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Create a variable named name containing the string John Doe.
*/
const name = "John Doe"
/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Execute a SUBTRACTION between the number 12 and the variable x, which stores the value 12.
*/
console.log(12-x);

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/
const name1 = "john"
const name2 = "John"

if (name1 === name2) {
    console.log("The names are identical");
} else {
    console.log("The names are different");
}

Boolean(name1.toLowerCase === name2.toLowerCase) ? console.log("Strings are equal in lowercase"):console.log("Strings are not equal");

console.log(name2); //The variable name2 remains unchanged. 

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the 
literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/
x = 6;

console.log(`${x}`);

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/
let a = []

Boolean([]) ? a.push("This is an array"): 
a.push("This is impossible because an empty array is a truthy value")
console.log(a)

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED */