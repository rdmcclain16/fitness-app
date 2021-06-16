// 'use strict'
// //asking user if they want to play

let answer1 = confirm('Would you like to sign up?')
if (!answer1) {
  alert('Sorry to see you go');
} else {
  alert('Great, let\'s get started!');
}

//once user says ok, ask for name then enter the page
let user = prompt('what is your name?');
while (!user) {
  alert ('Seriously, I need your name.');
  user = prompt('What is your name?');
} 
if (user.length > 0) {
confirm('Hi ' + user + ' let\'s play!');
}