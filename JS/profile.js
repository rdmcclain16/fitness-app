'use strict'
function results() {
    
    document.getElementById("first").innerHTML= "First name: " +
    document.getElementById("firstName").value;
 
    document.getElementById("last").innerHTML= "Last name: " +
    document.getElementById("lastName").value;

    document.getElementById("age").innerHTML= "Age: " +
    document.getElementById("userAge").value;

    document.getElementById("height").innerHTML= "Height: " +
    document.getElementById("userHeight").value;

    document.getElementById("weight").innerHTML= "Weight: " +
    document.getElementById("userWeight").value;
    
    document.getElementById("goal").innerHTML= "Goal Weight: " +
    document.getElementById("userGoalWeight").value;

    document.getElementById("email").innerHTML= "Email: " +
    document.getElementById("userEmail").value;

    document.getElementById("number").innerHTML= "Phone Number: " +
    document.getElementById("userPhoneNumber").value;

    document.getElementById("address").innerHTML= "Address: " +
    document.getElementById("userAddress").value;
}