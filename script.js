document.addEventListener('DOMContentLoaded', function() {
    // Toggle content on the Home page
    document.getElementById('toggleContent').addEventListener('click', function() {
        var moreInfo = document.getElementById('moreInfo');
        if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
            moreInfo.style.display = 'block';
        } else {
            moreInfo.style.display = 'none';
        }
    });

    // Add event listener for form submission with validation
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
           fetch('/submitForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);

            // Clear the form fields
            document.getElementById('contactForm').reset();
        })
        .catch((error) => {
            alert('Error submitting form: ' + error.message);
        });
    } else {
        alert('Please fill out all fields.');
    }
});
