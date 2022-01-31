"use strict";

alert("Welcome to my website");

let color;
let response = prompt(`What is your favorite color?`);

if (response) {
  alert(`Great ${response.toLowerCase()} is my favorite color too!`);
  console.log(response);
} else {
  prompt(`What is your favorite color?`);
}

let moviePrice = 3;

let littleMermaid = Number(
  prompt("How many days would you like to rent Little Mermaid?")
);

let brotherBear = Number(
  prompt("How many days would you like to rent Brother Bear?")
);

let hercules = Number(prompt("How many days would you like to rent Hercules?"));

let total = moviePrice * (littleMermaid + brotherBear + hercules);

alert("Your total is : " + "$" + total.toFixed(2));

let googleRate = Number(prompt("How much does Google pay?"));
let amazonRate = Number(prompt("How much does Amazon pay?"));
let facebookRate = Number(prompt("How much does FB pay?"));

let googleHours = Number(prompt("How many hours did you work at Google?"));
let amazonHours = Number(prompt("How many hours did you work at Amazon?"));
let facebookHours = Number(prompt("How many hours did you work at FB?"));

console.log(googleHours);
console.log(amazonHours);
console.log(facebookHours);

let totalIncome =
  googleHours * googleRate +
  amazonHours * amazonRate +
  facebookHours * facebookRate;

alert("Your pay for the week is: " + "$" + totalIncome);

let classNotFull = confirm("Is the class full?");
let scheduleConflict = confirm("Do you have another class at the same time?");

if (!classNotFull && !scheduleConflict) {
  alert("Can attend class");
} else {
  alert("Cannot attend class");
}

let premiumMember = confirm("Are you a premium member?");
let items = prompt("How many items do you want to purchase?");

let discount = premiumMember || items >= 2;

if (discount) {
  alert("discount applied to cart");
} else {
  alert("no discount to cart");
}
