/*
    IT 3203: Introduction to Web Development
    Milestone 1: Basic Website with Client-Side JavaScript
    File: script.js
    Programmer: Matthew Ricco
    Date: 03/04/2024
    Description: This JavaScript file contains basic client-side scripting
    for form validation and toggling elements in the Milestone 1 project for IT 3203.
*/

// Function to validate the contact form
function validateForm() {
    // Retrieve form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Check if any field is empty
    if (name.trim() == '' || email.trim() == '' || message.trim() == '') {
        // Display an alert message if any field is empty
        alert('Please fill in all fields.');
        // Prevent form submission
        return false;
    }

    // Allow form submission if all fields are filled
    return true;
}

// Function to toggle visibility of an element
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
