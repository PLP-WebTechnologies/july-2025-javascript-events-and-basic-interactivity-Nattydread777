// ====================
// Part 1: Event Handling (Click Example)
// ====================
const btn = document.getElementById("clickMeBtn");
btn.addEventListener("click", () => {
  alert("Button was clicked!");
});

// ====================
// Part 2: Dark Mode Toggle
// ====================
const darkModeBtn = document.getElementById("toggleBtn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ====================
// Part 3: FAQ Toggle
// ====================
const faqBtn = document.querySelector(".faq-toggle");
faqBtn.addEventListener("click", () => {
  const answer = document.querySelector(".faq-answer");
  answer.style.display =
    answer.style.display === "none" ? "block" : "none";
});

// ====================
// Part 4: Tabs
// ====================
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // hide all tabs
    tabContents.forEach((tab) => (tab.style.display = "none"));
    // show selected tab
    document.getElementById(btn.dataset.tab).style.display = "block";
  });
});

// ====================
// Part 5: Form Validation
// ====================
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop default submission
  let valid = true;

  // === Name validation ===
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // === Email validation ===
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // === Password validation ===
  const password = document.getElementById("password").value.trim();
  const passwordError = document.getElementById("passwordError");
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // === Final check ===
  if (valid) {
    alert("Form submitted successfully ✅");
    this.reset();
  }
});
