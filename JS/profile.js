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

function showInput() 
{   
    let form = document.forms[0].elements;
    let message_entered = "";

    for(let i = 0, j = form.length;i < j;i++) 
    {

        if(form[i].type == "text") {message_entered += (form[i].value + " - ");}

    }

    document.getElementById('display').innerHTML = message_entered;

}