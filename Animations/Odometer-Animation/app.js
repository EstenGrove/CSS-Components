/******************************************
 *  Author : Esten Grove   
 *  Created On : Sun Feb 17 2019
 *  File : app.js
 *******************************************/

// Odometer Display
const display = document.querySelector('.odometer-display');

// Counter
let counterVal = 4389;
let increment = 25;

const Counter = (val, inc) => {
    let range = val - inc;
    for (let i = 0; i <= range / 100; i++) {
        display.textContent += i + val;
    }
}

console.log(Counter(counterVal, increment));