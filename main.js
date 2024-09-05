// form elements variable declaration
const  form = document.getElementById("my-form");
const  firstname = document.getElementById("fname");
const  lastname = document.getElementById("lname");
// const  middlename_error = document.querySelector(".error2");
const  email = document.getElementById("email");

const  male_gender = document.getElementById("musculine");
const  female_gender = document.getElementById("femanine");
const  other_gender = document.getElementById("other");
const  phone_no = document.getElementById("phone");
const  password = document.getElementById("pwd");
const  confirm_password = document.getElementById("confirm_pwd");

// error message variable declaration
const  firstname_error = document.querySelector(".name-error");
const  lastname_error = document.querySelector(".error1");
const  email_error = document.querySelector(".email-error");

const  gender_error = document.querySelector(".gender-error");
const  phone_error = document.querySelector(".error5");
const  password_error = document.querySelector(".error6");
const  confirm_password_error  = document.querySelector(".error7");
const  success_msg  = document.querySelector(".success");


// const password_match = (password.value === confirm_password.value)
const password_match = (password.value !== confirm_password.value)
const inputs = (firstname.value == "" && lastname.value == "" && email.value == "" && !male_gender.checked || !female_gender.checked || !other_gender.checked && phone_no == "" && password == "" && confirm_password == "")
// const inputs = (firstname.value !== "" && lastname.value !== "" && email.value !== "" && male_gender.checked || female_gender.checked || other_gender && phone_no !== "" && password !== "" && confirm_password)

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (firstname.value == ""){
        firstname_error.textContent = "field cannot be empty";
       
    }else{
        firstname_error.textContent = "";
        
    }

    if (lastname.value == ""){
        lastname_error.textContent = "field cannot be empty";
    }else{
        lastname_error.textContent = "";
    }

    if (email.value == ""){
        email_error.textContent = "field cannot be empty";
    }else{
        email_error.textContent = "";
    }
    
    if (!male_gender.checked && !female_gender.checked && !other_gender.checked ) {
        gender_error.textContent = "field cannot be empty";
    }else{
        gender_error.textContent = "";
    }

       
    if (phone_no.value == ""){
        phone_error.textContent = "field cannot be empty";
    }else{
        phone_error.textContent = "";
    }   
    if (password.value == ""){
        password_error.textContent = "field cannot be empty";
    }else{
        password_error.textContent = "";
    }

    if (confirm_password.value == ""){
        confirm_password_error.innerHTML = "field cannot be empty";
    }else{
        confirm_password_error.textContent = "";
    }

    // if (firstname.value !== "" && lastname.value !== "" && email.value !== "" && male_gender.checked || female_gender.checked && phone_no !== "" && password !== "" && confirm_password !== ""){
    //     success_msg.innerHTML = "";
    // }else{
    //     success_msg.innerHTML = "";
        
    // }
    
    if (confirm_password.value !== password.value && confirm_password.value !== ""){
        confirm_password_error.innerHTML = "passwords do not match"
    }
    // else{
    //     confirm_password_error.innerHTML = "field cannot be empty"
    // }
    
     if(inputs && password_match ){
         success_msg.innerHTML = "Login Successful";
        //  location.href = "./login-page/index.html";
         
    }
    
    // if (inputs !== "" ){
    //      success_msg.innerHTML = "Login unSuccessful";

    // }

















})
































