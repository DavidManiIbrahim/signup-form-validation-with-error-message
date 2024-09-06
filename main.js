
// Declaring variable names

const form = document.getElementById("my-form");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");

const male_gender = document.getElementById("musculine");
const female_gender = document.getElementById("femanine");
const other_gender = document.getElementById("other");

const phone_no = document.getElementById("phone");
const password = document.getElementById("pwd");
const confirm_password = document.getElementById("confirm_pwd");

// Error message variables
const firstname_error = document.querySelector(".name-error");
const lastname_error = document.querySelector(".error1");
const email_error = document.querySelector(".email-error");

const gender_error = document.querySelector(".gender-error");
const phone_error = document.querySelector(".error5");
const password_error = document.querySelector(".error6");
const confirm_password_error = document.querySelector(".error7");
const success_msg = document.querySelector(".success");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Clear previous success message
    success_msg.textContent = "";

    // Validate first name
    if (firstname.value === "") {
        firstname_error.textContent = "Field cannot be empty";
    } else {
        firstname_error.textContent = "";
    }

    // Validate last name
    if (lastname.value === "") {
        lastname_error.textContent = "Field cannot be empty";
    } else {
        lastname_error.textContent = "";
    }

    // Validate email
    if (email.value === "") {
        email_error.textContent = "Field cannot be empty";
    } else {
        email_error.textContent = "";
    }

    // Validate gender selection
    if (!male_gender.checked && !female_gender.checked && !other_gender.checked) {
        gender_error.textContent = "Please select a gender";
    } else {
        gender_error.textContent = "";
    }

    // Validate phone number
    if (phone_no.value === "") {
        phone_error.textContent = "Field cannot be empty";
    } else {
        phone_error.textContent = "";
    }

    // Validate password
    if (password.value === "") {
        password_error.textContent = "Field cannot be empty";
    } else {
        password_error.textContent = "";
    }

    // Validate confirm password
    if (confirm_password.value === "") {
        confirm_password_error.textContent = "Field cannot be empty";
    } else {
        confirm_password_error.textContent = "";
    }

    // Check if passwords match
    if (confirm_password.value !== password.value && confirm_password.value !== "") {
        confirm_password_error.textContent = "Passwords do not match";
    } else if (confirm_password.value === password.value) {
        confirm_password_error.textContent = "";
    }

    // Display success message if all fields are valid and passwords match
    if (firstname.value !== "" &&
        lastname.value !== "" &&
        email.value !== "" &&
        (male_gender.checked || female_gender.checked || other_gender.checked) &&
        phone_no.value !== "" &&
        password.value !== "" &&
        confirm_password.value !== "" &&
        confirm_password.value === password.value) {
            success_msg.textContent = "Login Successful!";
            // You can redirect or handle further here
            location.href = "./login-page/index.html";
    }
});

