
// ==========================================
// 1. MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// ==========================================
// 2. AUTOMATIC COPYRIGHT YEAR
// ==========================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==========================================
// 3. NAME VALIDATION
// ==========================================

const nameInput = document.getElementById("name");

nameInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z ]/g, "");
});


// ==========================================
// 4. PHONE NUMBER VALIDATION
// ==========================================

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "").slice(0, 10);
});


// ==========================================
// 5. WHATSAPP ENQUIRY FORM
// ==========================================

const enquiryForm = document.getElementById("enquiryForm");
const formMessage = document.getElementById("formMessage");

// Replace with actual institute WhatsApp number
// Include country code without + or spaces

const whatsappNumber = "917027805505";

enquiryForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Validate form

    if (!enquiryForm.checkValidity()) {
        enquiryForm.reportValidity();
        return;
    }

    // Get form values

    const name = nameInput.value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = phoneInput.value.trim();

    const course = document.getElementById("course").value;

    const message = document.getElementById("message").value.trim();


    // Create WhatsApp message

    const whatsappMessage = `
Hello Apex Academy!

I would like to enquire about your courses.

Name: ${name}
Email: ${email}
Phone: ${phone}
Course: ${course}
Message: ${message || "No additional message"}

Please provide more information.

Thank you!
    `;


    // Generate WhatsApp URL

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    // Open WhatsApp

    window.open(whatsappURL, "_blank");


    // Display success message

    formMessage.textContent =
        "Your enquiry is ready! Please send it through WhatsApp.";

    formMessage.style.color = "green";


    // Reset form

    enquiryForm.reset();

});
