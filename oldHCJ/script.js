// Simple JS for form submission alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission
    alert('Thank you for contacting us!');
});
