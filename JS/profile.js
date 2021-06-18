// 'use strict'
// //asking user if they want to play


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


function newUser (firstName, lastName, age, height, weight, goalWeight) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.goalWeight = goalWeight;

}

let username = window.prompt('What is your name?');
    if(username === '') {
        alert('Please enter your name');
    } else {
        alert(`Thank you ${username}`);
    }

function userFirstName() {
    let firstName = prompt('Enter your first name');
    if ()
}

function userLastName() {
    let lastName = prompt('Enter your last name')
}

function userAge() {
    let age = prompt('Enter your age')
}

function userHeight() {
    let height = prompt('Please enter your height in inches')
}

function userWeight() {
    let weight = prompt('Please enter your weight in pounds')
}

function userGoalWeight() {
    let goalWeight = prompt('Enter your goal weight in pounds')
}

