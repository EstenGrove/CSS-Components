/******************************************
 *  Author : Esten Grove
 *  Created On : Sun Feb 17 2019
 *  File : app.js
 *******************************************/

// Alphabet Range: 97-122
// Get random number within a range
const randomNum = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

console.log(randomNum(97, 122));

// Display
const display = document.querySelector(".decoder");
