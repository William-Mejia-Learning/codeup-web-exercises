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

// let userChoice = confirm("Are you sure?");

// let currentSpeed = Number(prompt("How fast are you driving now?"));
// console.log(currentSpeed);

// let plannedSpeedIncrease = Number(
//   prompt("How many more MPH do you want to go?")
// );
// console.log(plannedSpeedIncrease);

// // console.log("Your planned speed is " + (currentSpeed + plannedSpeedIncrease));

// let newSpeed = currentSpeed + plannedSpeedIncrease;

// let distanceLeft = Number(
//   prompt("How many miles are you from your destination?")
// );

// let timeAtCurrentSpeed = (distanceLeft / currentSpeed) * 60;
// let timeplanned = (distanceLeft / newSpeed) * 60;
// let timeGain = timeAtCurrentSpeed - timeplanned;

// alert(
//   "If you drive at " +
//     newSpeed +
//     " mph, you will arrive " +
//     timeGain.toFixed(2) +
//     " minutes sooner."
);
