# web-development-project
IT 3203: Introduction to Web Development
Milestone 1: Basic Website with Client-Side JavaScript
File: IntroToWeDesignProject.html
Programmer: Matthew Ricco
Date: 03/02/2024

Description:
This HTML document demonstrates the basic structure and interactivity using client-side JavaScript for the Milestone 1 project in IT 3203. 
This project focuses on creating a simple website with three pages (Home, About, and Contact), styling it with CSS, and adding basic interactivity using JavaScript.
Each page contains relevant content, and the navigation menu allows users to navigate between pages.
The script.js file handles basic client-side scripting, such as form validation and toggling elements. 

03/02/2024 -03-04/2024
worked on all 3 web pages, css style sheet, and javascript. Adding them to the git hub nuw. should have done itterative saves but just kept the computer running for the last few days as I worked on this.
files being added now 8:18pm.

Next itterations:
add php stuff, add more js bank end stuff, add top button to about page in the footer. Play with the css a little more, maybe not have the boxes all the way across the screen and change some fonts, do some bolds and underlines maybe?

04/14/2024 - 04/15/2024
### Changes Made to `script.js`:
- Updated Form Submission: Changed the request body construction to use `URLSearchParams` for form data serialization.
- Form Submission with `fetch`: Utilized `URLSearchParams` directly as the `body` in the `fetch` function to handle form submission.

### Added file and Changes Made to `server.js`:
This script is designed to work with the server-side logic described earlier and enhances the form submission process with error handling and feedback to the user.
- Handling Form Submission: Modified the server to handle form submissions with `x-www-form-urlencoded` data format using `express.urlencoded()` middleware.
- Serving Static Files: Updated static files serving to use the root directory (`__dirname`) for serving HTML, CSS, and JavaScript files.

These changes ensure that the client-side form submission (from `script.js`) aligns with the server-side form handling (in `server.js`) using `x-www-form-urlencoded` data format.

04/21/2024- 04/22/2024

### Top of Page Button
Added a top of page button to the About page for easy navigation. Updated styles.css to include styling for the top button to ensure its visibility and appearance. Implemented JavaScript functions in script.js to control the behavior of the top button, including showing or hiding it based on scroll position and enabling smooth scrolling to the top of the page upon button click. This enhancement improves user experience by providing a convenient way to return to the top of the content.
