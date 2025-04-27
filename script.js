// Smooth scrolling is already handled by CSS
// You can add more JS for form validation or popups

document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out! We will contact you soon.');
});
