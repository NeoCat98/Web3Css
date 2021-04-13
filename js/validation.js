// This fulfills requirement 2.4.6 d)
function ValidateDiscount(){
    var email = document.getElementById('email').value;
    if(!validateEmail(email)){
        alert("You have entered an invalid email address!")   
    }
    
}

function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    if(re.test(email)){
        document.getElementById('email').value = '';
        return true;
    }
    return false;   
}

function validateName(name){
    var re = /^[a-zA-Z\s]*$/;
    if(re.test(name)){
        document.getElementById("name").value = '';
        return true;
    } 
    return false;
}

// This fulfills requirement 2.4.3 c)
function checkForm(){
    hideAllErrors();
    var name,email;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    if(!validateEmail(email)){
        document.getElementById("error-email").innerText = "Invalid email"
    }
    if(!validateName(name)||name == ''){
        document.getElementById("error-name").innerText = "Invalid name"
    }
}

function hideAllErrors() {
    document.getElementById("error-name").innerText = ""
    document.getElementById("error-email").innerText = ""
  }