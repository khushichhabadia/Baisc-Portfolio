document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
});
