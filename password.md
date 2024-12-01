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
  (function() {
  const _0x1234 = "secret", _0x5678 = "dm-notes/", _0x9abc = document["getElementById"]("password-input"), _0xdef0 = document["getElementById"]("submit-password"), _0x123abc = document["getElementById"]("error-message");

  _0xdef0["addEventListener"]("click", function() {
    if (_0x9abc["value"] === _0x1234) {
      window["location"]["href"] = _0x5678;
    } else {
      _0x123abc["textContent"] = "Incorrect password. Please try again.";
    }
  });
})();
</script>
