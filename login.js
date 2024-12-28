document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "user@example.com" && password === "password123") {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to a dashboard page
    } else {
        alert("Invalid email or password.");
    }
});
