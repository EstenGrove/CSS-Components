/******************************************
 *  Author : Esten Grove
 *  Created On : Thu May 02 2019
 *  File : app.js
 *******************************************/
const buttons = document.querySelectorAll(".accordion-Btn");

// Animate icon and show 'section' onClick
[...buttons].forEach((button, index) => {
  button.addEventListener("click", e => {
    const currentIcon = e.currentTarget.firstElementChild;
    const currentSection = e.currentTarget.nextElementSibling;
    
    currentIcon.classList.toggle("animateIcon");
    currentSection.classList.toggle("show");
  });
});
