// Dummy account for login validation
const dummyAccount = {
    email: "a",
    password: "a"
};

// Function to handle login authentication
function auth(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    // Validate email and password
    if (emailInput === dummyAccount.email && passwordInput === dummyAccount.password) {
        // Redirect to todo.html on successful login
        window.location.href = './todo.html';
    } else {
        // Display feedback for invalid login
        alert("Invalid email or password. Please try again.");
    }
}

// Add event listener to the form
document.querySelector('form').addEventListener('submit', auth);