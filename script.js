document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = document.getElementById('text').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    const mailtoLink = `mailto:chowdhurysimanto2004@gmail.com?subject=Contact Form Submission&body=Email: ${email}%0AContact: ${contact}%0AMessage: ${message}`;
    window.location.href = mailtoLink;
});