// IT 3203: Introduction to Web Development
// Milestone 1: Basic Website with Client-Side JavaScript
// File: script.js
// Programmer: Matthew Ricco
// Date: 04/14/2024
// Description: Client-side scripting for form submission and validation.

// Function to validate the contact form before submission
function validateForm() {
    // Retrieve form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Check if any field is empty
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        // Display an alert message if any field is empty
        alert('Please fill in all fields.');
        // Prevent form submission
        return false;
    }

    // Form data is valid, allow submission
    return true;
}

// Function to handle form submission
function submitForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Call the validateForm function to ensure all fields are filled
    if (!validateForm()) {
        return; // If validation fails, do not proceed with submission
    }

    // Retrieve form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Construct the request body for the POST request
    var formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Send a POST request to the server to handle form submission
    fetch('/submit-form', {
        method: 'POST',
        body: formData // Use URLSearchParams as the request body
    })
    .then(response => {
        if (response.ok) {
            // Display a success message to the user
            alert('Form submitted successfully!');
            // Reset the form after successful submission
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } else {
            throw new Error('Form submission failed.');
        }
    })
    .catch(error => {
        // Display an error message if form submission fails
        alert('An error occurred while submitting the form.');
        console.error('Error:', error);
    });
}

// Add event listener to the form submit button
document.getElementById('submit-button').addEventListener('click', submitForm);

// Function to toggle visibility of an element by its ID
function toggleElement(id) {
    // Retrieve the element by its ID
    var element = document.getElementById(id);
    // Check the current display style of the element
    if (element.style.display === 'none') {
        // If the element is hidden, show it
        element.style.display = 'block';
    } else {
        // If the element is visible, hide it
        element.style.display = 'none';
    }
}
