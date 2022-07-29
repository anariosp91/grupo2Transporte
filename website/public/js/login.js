window.addEventListener("load", () => {
    let email = document.querySelector("#email");
    let errEmail = document.querySelector("#err_email");
    let password = document.querySelector("#password");
    let errPassword = document.querySelector("#err_password");
    let button = document.querySelector("#loginBtn");
    let form = document.querySelector("#form");
    let inputForm = document.querySelectorAll("input");

    let errors = {};


    inputForm.forEach(input => input.addEventListener("blur", (e) => {

        // Email validations
        if (e.srcElement.name === "email") {
            let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            if (email.value === "") {
                errors.email = "Ingrese un correo"
            } else if (!(emailRegex.test(email.value))) {
                errors.email = "Ingrese un correo valido"
            } else if ((email.value !== "") || (emailRegex.test(email.value))) {
                errors.email = null
            }
        }

        //Password validations
        if (e.srcElement.name === "password") {
            if (password.value === "") {
                errors.password = "Debe ingresar una contraseña"
            } else {
                errors.password = null
            }
        }

        //check the errors
        if (Object.keys(errors).length >= 1) {
            e.preventDefault();
            errEmail.innerText = (errors.email) ? errors.email : "";
            errPassword.innerText = (errors.password) ? errors.password : "";
        } else {
            form.submit();
        }
    }))

})