---
layout: default
title: Enter Password
---

<h1>{{ page.title }}</h1>
<p>Please enter the password to access the content:</p>

<!-- Password Input Section -->
<div id="password-section">
  <input type="password" id="password-input" placeholder="Password">
  <button id="submit-password">Submit</button>
  <div class="error-message" id="error-message"></div>
</div>

<script>
  // Define the correct password and the target page URL
  const correctPassword = "secret";
  const contentPageUrl = "dm-notes/";  // URL of the protected content page

  // Get references to elements
  const passwordInput = document.getElementById("password-input");
  const submitButton = document.getElementById("submit-password");
  const errorMessage = document.getElementById("error-message");

  // Add event listener to the submit button
  submitButton.addEventListener("click", () => {
    // Check if the entered password is correct
    if (passwordInput.value === correctPassword) {
      // Redirect to the protected content page
      window.location.href = contentPageUrl;
    } else {
      // Display an error message
      errorMessage.textContent = "Incorrect password. Please try again.";
    }
  });
</script>