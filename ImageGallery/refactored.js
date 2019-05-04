/******************************************
 *  Author : Esten Grove
 *  Created On : Fri May 03 2019
 *  File : refactored.js
 *******************************************/
// All images in gallery
const images = document.querySelectorAll('[id^="img-"]');

// Main image display
const imageBox = document.querySelector(".main-img");

// Add event listener to each gallery image
// When clicked make that image the src of the main imageBox
[...images].forEach((img, index) => {
  img.addEventListener("click", e => imageBox.setAttribute("src", e.target.src));
});
