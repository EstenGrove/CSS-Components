/******************************************
 *  Author : Esten Grove
 *  Created On : Thu Feb 21 2019
 *  File : app.js
 *******************************************/

// Dropdown Elements
const triggerDrop = document.querySelector('#drop');
const dropdown = document.querySelector('.dropdown');

// Dropdown Event
triggerDrop.addEventListener('mouseenter', (e) => {
    if (dropdown.classList.contains('showDrop')) {
        dropdown.classList.remove('showDrop');
    } else {
        dropdown.classList.add('showDrop');
    }
})
