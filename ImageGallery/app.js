/******************************************
 *  Author : Esten Grove
 *  Created On : Fri May 03 2019
 *  File : app.js
 *******************************************/
let images = document.querySelectorAll('[id^="img-"]');

let arr = [];

images.forEach(function(img) {
  arr.push(img.src);
});

console.log(arr);

let imageBox = document.querySelector(".main-img");

let mainImg = imageBox.src;

let gallery = document.querySelector(".gallery-container");

gallery.addEventListener("click", function(e) {
  //when image in gallery is clicked, make that image the src of the imageBox
  let clicked = e.target.src;

  imageBox.setAttribute("src", clicked);
});
