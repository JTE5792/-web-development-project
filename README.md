# -web-development-project
Project for IT 3203
<!DOCTYPE html>
<!-- Home -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Welcome to Our Website</h1>
        <p>This is the home page. Enjoy your stay!</p>
    </main>
    <footer>
        <p>&copy; 2024 Your Website</p>
    </footer>
    <script src="scripts.js"></script>
</body>
</html>
<!-- About -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header section with navigation menu -->
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <h1>About Us</h1>
        <p>Learn more about our mission and values.</p>
    </main>
    
    <!-- Footer section -->
    <footer>
        <p>&copy; 2024 Your Website</p>
    </footer>
    <script src="scripts.js"></script>
</body>
</html>
<!-- Contact -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header section with navigation menu -->
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <h1>Contact Us</h1>
        <form id="contactForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Submit</button>
        </form>
    </main>
    
    <!-- Footer section -->
    <footer>
        <p>&copy; 2024 Your Website</p>
    </footer>
    <script src="scripts.js"></script>
</body>
</html>
