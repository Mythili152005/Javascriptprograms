document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting
        if (validateForm()) {
            alert('Form submitted successfully!');
            form.reset(); // Reset form after successful submission
        }
    });

    function validateForm() {
        let isValid = true;
        let errorMessage = "";

        // First Name validation
        const fname = document.getElementById('fname').querySelector('input');
        const fnameValue = fname.value.trim();
        const fnamePattern = /^[a-zA-Z0-9]{3,16}$/;
        if (!fnamePattern.test(fnameValue)) {
            showError(fname, "First name must be alphanumeric and contain 3-16 characters.");
            isValid = false;
        } else {
            showSuccess(fname);
        }

        // Last Name validation
        const lname = document.getElementById('lname').querySelector('input');
        const lnameValue = lname.value.trim();
        const lnamePattern = /^[a-zA-Z0-9]{3,16}$/;
        if (!lnamePattern.test(lnameValue)) {
            showError(lname, "Last name must be alphanumeric and contain 3-16 characters.");
            isValid = false;
        } else {
            showSuccess(lname);
        }

        // Email validation
        const email = document.getElementById('mail');
        const emailValue = email.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            showError(email, "Email must be a valid address, e.g., example@example.com.");
            isValid = false;
        } else {
            showSuccess(email);
        }

        // Password validation
        const password = document.getElementById('pass');
        const passwordValue = password.value.trim();
        const passwordPattern = /^[a-zA-Z0-9]{3,16}$/;
        if (!passwordPattern.test(passwordValue)) {
            showError(password, "Password must be alphanumeric and contain 3-16 characters.");
            isValid = false;
        } else {
            showSuccess(password);
        }

        // Telephone validation
        const phone = document.getElementById('phno');
        const phoneValue = phone.value.trim();
        const phonePattern = /^\d{10}$|^\d{3}-\d{3}-\d{4}$/;
        if (!phonePattern.test(phoneValue)) {
            showError(phone, "A valid telephone number is required (10 digits or 000-000-0000).");
            isValid = false;
        } else {
            showSuccess(phone);
        }

        // Bio validation
        const bio = document.getElementById('bio');
        const bioValue = bio.value.trim();
        const bioPattern = /^[a-z-_]{8,50}$/;
        if (!bioPattern.test(bioValue)) {
            showError(bio, "Bio must contain only lowercase letters, underscores, hyphens, and be 8-50 characters.");
            isValid = false;
        } else {
            showSuccess(bio);
        }

        return isValid;
    }

    function showError(input, message) {
        const parent = input.parentElement;
        const error = parent.querySelector('p');
        error.innerText = message;
        error.style.color = "red";
    }

    function showSuccess(input) {
        const parent = input.parentElement;
        const error = parent.querySelector('p');
        error.innerText = "";
    }
});