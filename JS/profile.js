// 'use strict'

// function results(){
//     let firstName = document.getElementById("firstName").value;
//     let result ='First Name: ' + firstName;
//     document.getElementById("display").textContent = result;

//     let lastName = document.getElementById("lastName").value;
//     let result ='Last Name: ' + lastName;
//     document.getElementById("display").textContent = result;

// }
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

    // let form = document.forms[0].elements;
    // let message_entered = "";

    // for(let i = 0, j = form.length;i < j;i++) 
    // {

    //     if(form[i].type == "text") {message_entered += (form[i].value + " - ");}

//     }

//     document.getElementById('display').innerHTML = message_entered;

// }


