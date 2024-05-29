// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("orderForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Validate first name
        const firstNameInput = document.getElementById("fname");
        const firstNameValue = firstNameInput.value.trim();
        if (firstNameValue === "") {
            showError(firstNameInput, "Please enter your first name");
        } else {
            showSuccess(firstNameInput);
        }

        // Validate last name
        const lastNameInput = document.getElementById("lname");
        const lastNameValue = lastNameInput.value.trim();
        if (lastNameValue === "") {
            showError(lastNameInput, "Please enter your last name");
        } else {
            showSuccess(lastNameInput);
        }
        
        // Validate DOB
        const dobInput = document.getElementById("dob")
        const dobValue = dobInput.value.trim()
        if (dobValue === "") {
            showError(dobInput, "Please enter your Date of Birth")
        } else {
            showSuccess(dobInput);
        }

        // If all fields are valid, submit the form
        if (validateForm()) {
            form.submit();
        }
    });

    function handleSubmit(event) {
        event.preventDefault();
        alert("Form Submitted!")
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        formGroup.classList.remove("success");
        formGroup.classList.add("error");
        const errorMessage = formGroup.querySelector("small");
        errorMessage.textContent = message;
    }

    function showSuccess(input) {
        const formGroup = input.parentElement;
        formGroup.classList.remove("error");
        formGroup.classList.add("success");
        const errorMessage = formGroup.querySelector("small");
        errorMessage.textContent = "";
    }

    function validateForm() {
        const formGroups = document.querySelectorAll(".form-group");
        let isValid = true;
        formGroups.forEach(function(formGroup) {
            if (formGroup.classList.contains("error")) {
                isValid = false;
            }
        });
        return isValid;
    }
});
