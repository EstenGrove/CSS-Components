/******************************************
 *  Author : Esten Grove   
 *  Created On : Sat Feb 16 2019
 *  File : Typewriter.js
 *******************************************/

// Add Repeating Typewriter Animation 
const TypewriterText = document.querySelector('.typewriter-repeating');

const textArr = [
    "I love Design.", "I love to Develop.", "And I love solving problems.", "I\'m a front-end developer."
];


const runAnimation = () => {
    return TypewriterText.classList.add('repeatTyping');
}

//Use ES6 Class to create new instance of the Typewriter animation
class Typewriter {
    constructor(count, text) {
        this.count = count;
        this.text = text;
        this.run = function (count, text) {
            return requestAnimationFrame(runAnimation());


        }
    }

}

// Create new instances of Typewriter to re-run the animation
const _1st = new Typewriter(1, 'I love Design.');
const _2nd = new Typewriter(2, 'I love to Develop');
const _3rd = new Typewriter(3, 'And I love solving Problems.');
const _4th = new Typewriter(4, 'I\'m a front-end developer');