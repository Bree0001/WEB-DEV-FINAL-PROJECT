document.addEventListener('DOMContentLoaded', function() {
    // Form Validation for Contact Page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');
        const successMessage = document.getElementById('successMessage');

        contactForm.addEventListener('submit', function(event) {
            let isValid = true;

            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Please enter your name.';
                isValid = false;
            } else {
                nameError.textContent = '';
            }

            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Please enter your email.';
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Please enter your message.';
                isValid = false;
            } else {
                messageError.textContent = '';
            }

            if (!isValid) {
                event.preventDefault(); // Prevent form submission if there are errors
            } else {
                // Simulate successful submission (replace with actual submission logic)
                console.log('Form submitted successfully!');
                successMessage.style.display = 'block';
                contactForm.reset(); // Clear the form
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 3000);
                event.preventDefault(); // Prevent actual page reload for this simulation
            }
        });

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }

    // You can add more JavaScript for other interactive elements here,
    // such as image sliders on the home page, etc.
});
