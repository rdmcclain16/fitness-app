// 'use strict'
// //asking user if they want to play

function results(){
    let firstName = document.getElementById("firstName").value;
 
    let result ='First Name: ' + firstName;
    document.getElementById("display").textContent = result;
}
// function showInput() 
// {   
//     let form = document.forms[0].elements;
//     let message_entered = "";

//     for(let i = 0, j = form.length;i < j;i++) 
//     {

//         if(form[i].type == "text") {message_entered += (form[i].value + " - ");}

//     }

//     document.getElementById('display').innerHTML = message_entered;

// }


