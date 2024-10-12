document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Thank you for your message!');
    // Here you can add code to send the form data to your server or email
});
