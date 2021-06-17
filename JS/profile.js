'use strict'

function results(){
   let firstName = document.getElementById("firstName").value;

   let result ='First Name: ' + firstName 
   document.getElementById("display").textContent = result;
// let firstName = document.getElementById('firstName').value;
// let age = document.getElementById('age').value;
// let height = document.getElementById('height').value;
// let weight = document.getElementById('weight').value;
// let goal = document.getElementById('goal').value;
// let lastName = document.getElementById('lastName').value;
// let result = 'Last name: ' + lastName + "<br/>";
// document.write("<h1> Thank you!</h1>");
// document.write("<h3> Here is your data:</h3>");
// //getelement by id to put data for output 
// document.getElementById('results').textContent = result;

// document.write('Last name: ' + lastName + "<br/>");
// document.write('Age: ' + age + "<br/>");
// document.write('Height: ' + height + "<br/>");
// document.write('Weight: ' + weight + "<br/>");
// document.write('Goal: ' + goal + "<br/>");
}