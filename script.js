    // Toggling elements
    document.getElementById('toggleContent').addEventListener('click', function() {
        var moreInfo = document.getElementById('moreInfo');
        if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
            moreInfo.style.display = 'block';
        } else {
            moreInfo.style.display = 'none';
        }
    });

    // Form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Simulate form submission
        console.log('Form submitted successfully!');
        alert('Form submitted successfully!');

        // Clear the form fields
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }

