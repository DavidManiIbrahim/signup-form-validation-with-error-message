<<<<<<< HEAD
let username = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
const submit_btn = document.getElementById("submit");
const form = document.getElementById("myform");
const user_error_msg = document.querySelector("#error1")
const error_msg = document.querySelector("#error")
const password_error_msg = document.querySelector("#error2")



form.addEventListener("submit", e => {
        e.preventDefault();

    if (username.value == ""){
        user_error_msg.innerHTML = "username field cannot be empty";
        // setTimeout(() => user_error_msg.remove(), 3000)
    }else{
        user_error_msg.innerHTML = "";
    }

    if (password.value == ""){
        password_error_msg.innerHTML = "password field cannot be empty";
        // setTimeout(() => password_error_msg.remove(), 3000);
    }else{
        password_error_msg.innerHTML = "";
    }


    if (username.value !== "" && password.value !== ""){
        error_msg.innerHTML = "Login successful";
        location.href = "login.html";
    }
=======

const revealpassword = document.querySelector("#showpassword");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm-password");

 revealpassword.addEventListener("click", evt => {
    evt.preventDefault();

    if (password.type === "text") {
        password.type = "password";
        confirm_password.type = "password";
        revealpassword.innerHTML = "Show Password";
    }else if(password.type === "password") {
        password.type = "text";
        confirm_password.type = "text";
        revealpassword.innerHTML = "Hide Password";
    }


})
>>>>>>> 21cd9f629f5938a77e2a49afb4f0160a41dc7c36





<<<<<<< HEAD











    })



function allClear(){
    document.getElementById("name").value = "" ;
    document.getElementById("email").value = "" ;
    document.getElementById("password").value = "" ;

}



=======
>>>>>>> 21cd9f629f5938a77e2a49afb4f0160a41dc7c36
