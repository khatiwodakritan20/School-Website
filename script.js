// ===============================
// JavaScript for School Website
// ===============================

// Function 1: Show a welcome alert when user clicks the "Click Me!" button
function showAlert() {
  alert("Welcome to Sagarmatha Secondary Boarding School School! 🎓");
  // The popup message will appear when button in Home section is clicked
}
// ===== Image Slider Script =====
let slides = document.querySelectorAll(".slide"); // get all images
let currentSlide = 0; // start with first image

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active"); // hide all
    if (i === index) {
      slide.classList.add("active"); // show selected
    }
  });
}

// Change slide every 3 seconds
setInterval(() => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0; // go back to first
  }
  showSlide(currentSlide);
}, 3000);


// Function 2: Simple form validation
// This checks if the user has filled out the form before submitting
document.addEventListener("DOMContentLoaded", function () {
  // Wait until the page content is fully loaded

  // Get the form element
  const form = document.querySelector("form");

  // Listen for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop form from refreshing the page

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if any field is empty
    if (name === "" || email === "" || message === "") {
      alert("⚠️ Please fill in all fields before sending.");
    } else {
      alert("✅ Thank you, " + name + "! Your message has been sent.");
      form.reset(); // clear the form after submission
    }
  });
});

// Function 3: Smooth scroll when clicking menu links
// This makes the page scroll smoothly to sections
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // stop instant jump

    // Get the section ID (example: "#about")
    const sectionId = this.getAttribute("href");

    // Scroll smoothly to that section
    document.querySelector(sectionId).scrollIntoView({
      behavior: "smooth"
    });
  });
});
