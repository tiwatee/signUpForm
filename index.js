// Accessing the inputs by id for my javascript
var fName=document.getElementById("FName");
var lName=document.getElementById("LName");
var email=document.getElementById("Email");
var password= document.getElementById("Password");
var submit= document.getElementById("button")

//declaring the input values as empty strings
var firstName=""
var lastName=""
var Passwords=""
var emailAddress=""


//Accessing the input values to use for the validation
fName.addEventListener('input', function(e) {
    firstName=e.target.value
} )

lName.addEventListener('input', function(e) {
    lastName=e.target.value
} )

email.addEventListener('input', function(e){
    emailAddress=e.target.value
})

password.addEventListener('input', function(e) {
    Passwords=e.target.value
} )


//Accessing the error icon selector class
var invalidFName=fName.nextElementSibling;
var invalidLName=lName.nextElementSibling;
var invalidPassword=password.nextElementSibling;
var invalidEmail=email.nextElementSibling;


//When the claim reward buton is clicked, it tests for the following conditions.
submit.addEventListener('click', function(){
    //if first name length is less than zero, the invalid icon shows else it is hidden
    if (firstName.length<1){
        console.log("firstName invalid")   
        invalidFName.style.display="block"
        fName.style.border="solid 1px hsl(0, 100%, 74%)"
    } else{
        invalidFName.style.display="none"
        fName.style.border='solid 1px hsl(246, 25%, 77%)'
    }

    //if last name length is less than zero, the invalid icon shows else it is hidden
    if (lastName.length<1){
        console.log("lastname invalid")
        invalidLName.style.display="block"
        lName.style.border="solid 1px hsl(0, 100%, 74%)"
    } else{
        invalidLName.style.display="none"
        lName.style.border='solid 1px hsl(246, 25%, 77%)'
    }

    //if email is a valid one, the invalid icon stays hidden else the invalid icon shows
    if (emailAddress.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        invalidEmail.style.display="none"
        email.style.border='solid 1px hsl(246, 25%, 77%)'
    } else{
        console.log("Email invalid")
        invalidEmail.style.display="block"
        //placeholder is changed to "email@example/com"
        email.placeholder="email@example/com" 
        email.style.border="solid 1px hsl(0, 100%, 74%)"
    }

    //if password length is less than zero, the invalid icon shows else it is hidden
    if (Passwords.length<1){
        console.log("Password invalid")
        invalidPassword.style.display="block"
        password.style.border="solid 1px hsl(0, 100%, 74%)"
    } else{
        invalidPassword.style.display="none"
        password.style.border='solid 1px hsl(246, 25%, 77%)'
    }
})