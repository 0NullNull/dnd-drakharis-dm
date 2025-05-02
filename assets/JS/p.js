document.addEventListener("DOMContentLoaded", function() {
    const _0x5678 = "dm-notes/",
    _0x9abc = document["getElementById"]("password-input"), 
    _0x1234 = document["getElementById"]("title"), 
    _0xdef0 = document["getElementById"]("submit-password"), 
    _0x123abc = document["getElementById"]("error-message");
    _0x1334 = "dmPassword"
    
    _0xdef0["addEventListener"]("click", function() {
      if (_0x9abc["value"] === _0x1234.innerText) {
        window["location"]["href"] = _0x5678;
      } else {
        _0x123abc["textContent"] = _0x1334;
      }
    });
});