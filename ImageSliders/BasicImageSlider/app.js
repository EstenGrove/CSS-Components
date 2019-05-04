const img1 = "url(/imgs/backing.jpg)";
const img2 = "url(/imgs/backing1.jpg)";
const img3 = "url(/imgs/Blend_Luminosity.png)";
const imgsArr = [img1, img2, img3];
//IMAGE DISPLAY ELEMENT
let display = document.querySelector(".img-1");
//Slider Arrows
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
//Load img1 upon page load
window.onload = e => {
  display.classList.add("imgs");
  display.style.backgroundImage = imgsArr[0];
};
// Index variable
let i = 0;
//Arrow Navigation
function moveForward() {
  if (imgsArr.index === 2) {
    i = 0;
    imgsArr.index = 0;
    display.style.backgroundImage = imgsArr[i];
  } else {
    i++;
    imgsArr.index = i;
    display.style.backgroundImage = imgsArr[i];
  }
}

function moveBack() {
  if (imgsArr.index === 0) {
    i = 2;
    imgsArr.index = 2;
    display.style.backgroundImage = imgsArr[i];
  } else {
    i = imgsArr.index = i - 1;
    display.style.backgroundImage = imgsArr[i];
  }
}

rightArrow.addEventListener("click", moveForward);
leftArrow.addEventListener("click", moveBack);
