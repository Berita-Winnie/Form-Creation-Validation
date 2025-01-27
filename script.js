//Setup and Initial Code Structure
document.addEventListener('DOMContentLoaded', function() {
 
const form =document.getElementById("registration-form");
const feedbackDiv =document.getElementById("form-feedback");

//Form Submission and Event Prevention
 form.addEventListener('submit',event => {
    event.preventDefault(); //prevent form submission

//input Retreval and Logic    
const username = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();

//Validation Logic

let isValid = true;
let messages =[];
   
if (username.length < 3){
    isValid = false;
    messages.push("Username must have at least 3 characters long!");
}

if (email.includes("@") && email.includes(".")){
    isValid = false;
    messages.push("Invalid Email format!");
}

if (password.length <8){
    isValid =false;
    messages.push("Your password must be at least 8 characters long!");
}


//Display Feedback
feedbackDiv.style.display = "block";
if(isValid = true){
    feedbackDiv.textContent ="Registration Successfull!";
    feedbackDiv.style.color = "#dc3545";
} else {
    feedbackDiv.innerHTML = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545";
}

 });
});