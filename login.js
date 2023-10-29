function login(event) {
    // To prevent the page from reloading
    event.preventDefault();

    // Grab username and password
    const nameEl = document.querySelector("#username");
    const passwordEl = document.querySelector("#password");

    // Set username and password in local storage
    localStorage.setItem("userName", nameEl.value);
    localStorage.setItem("userPassword", passwordEl.value);

    // Redirect to dashboard.html page
    window.location.href = "dashboard.html";
}