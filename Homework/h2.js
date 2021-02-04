/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/
const arr = [1,2,3,4,5]
/* WRITE YOUR CODE HERE */


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
const flynn = {
    firstName: "Flynn",
    lastName: "Stacey",
    age: 28, 
    email: "flynnstacey@hotmail.com",
    job: "software engineer"
}
/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/
flynn.hasDrivingLicence = false
/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Remove from the previously created object the age property.
*/
delete flynn.age
/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/
const bob = {
    firstName: "Bob",
    lastName: "Lee",
    age: 45, 
    email: "boblee@hotmail.com",
}

if (flynn.email !== bob.email) {
    console.log("flynn and bobs email address's are NOT the same");
} else {
    console.log("wow the email address ARE the same, I must of inputted incorrectly");
}
/* WRITE YOUR CODE HERE */

/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50, they are eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculate totalCost based on this assumption.
*/
let totalShoppingCart = Math.floor(Math.random()*100)
let totalCost = totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + 10

console.log(totalShoppingCart);
console.log(totalCost);

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let bFridayDiscount = 0.2
totalCost = totalShoppingCart * (1-bFridayDiscount) > 50 ? totalShoppingCart * (1-bFridayDiscount): (totalShoppingCart * (1-bFridayDiscount)) + 10

console.log(totalCost);
/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/
const car1 = {
    brand: "BMW",
    model: "m3",
    licensePlate: "YR99 JEP"
}

const car2 = Object.assign({}, car1)
car2.licensePlate = "BH45 TYX"
const car3 = Object.assign({}, car1)
car3.licensePlate = "ER28 UPO"
const car4 = Object.assign({}, car1)
car4.licensePlate = "ND76 VWQ"
const car5 = Object.assign({}, car1)
car5.licensePlate = "LM91 KLM"
const car6 = Object.assign({}, car1)
car5.licensePlate = "AZ52 GBH"

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/
const carsForRent = [car1,car2,car3,car4,car5,car6];

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
carsForRent.pop();
carsForRent.shift();
/* WRITE YOUR CODE HERE */

/* EXERCISE 11
Print in the console the TYPES of a car, of the licensePlate and of the brand properties.
*/
console.log(typeof car1);
console.log(typeof car1.licensePlate);
console.log(typeof car2.brand);
/* WRITE YOUR CODE HERE */

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/
const carsForSale = [car2,car3,car6];
let totalCars = 0
for (let i=0;i<carsForSale.length;i++) {
    if (carsForRent.includes(carsForSale[i])) {
        totalCars += 1
    }
    
}
console.log(totalCars);
/* WRITE YOUR CODE HERE */

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/
console.log(carsForSale[0],carsForSale[1],carsForSale[2]);
/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code via Discord to the tutor! In the next days we'll also learn how to use GIT
*/












