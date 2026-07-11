// Get the form
const form = document.querySelector("form");

// Add submit event
form.addEventListener("submit", function (event) {

    event.preventDefault(); // Prevent form submission

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value.trim();
    const agree = document.getElementById("agree").checked;

    // Validation
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    if (course === "") {
        alert("Please select a course.");
        return;
    }

    if (address === "") {
        alert("Please enter your address.");
        return;
    }

    if (!agree) {
        alert("Please accept the Terms & Conditions.");
        return;
    }

    // Success
    alert("Registration Successful!");

    // Print data in Console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Password:", password);
    console.log("Gender:", gender.value);
    console.log("Course:", course);
    console.log("Address:", address);

    // Reset form
    form.reset();
});