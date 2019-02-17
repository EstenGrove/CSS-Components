/******************************************
 *  Author : Esten Grove   
 *  Created On : Sat Feb 16 2019
 *  File : Typewriter.js
 *******************************************/

// Add Repeating Typewriter Animation 
const TypewriterText = document.querySelector('.typewriter-repeating');

const textArr = [
    "Hi. I\'m Esten", "I love Design.", "I love to Develop.", "And I love solving problems.", "I\'m a front-end developer."
];
// Check for ending animation
TypewriterText.addEventListener('animationend', e => {
    for (let i = 0; i < textArr.length; i++) {
        TypewriterText.textContent = `${textArr[i]}`;
        TypewriterText.classList.add('repeatTyping');
    }
})