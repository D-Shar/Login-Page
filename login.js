const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const submitBtn = document.querySelector(".login-btn");

    username.addEventListener("keyup", () => {
        if (username.value == '') {
            usernameError.style.display = "block";
        } 
        else {
            usernameError.style.display = "none";
        }
    });

