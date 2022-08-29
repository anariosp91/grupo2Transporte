// const db = require ('../database/models/index');
window.addEventListener("load", () => {
    let name = document.querySelector("#name");
    let errName = document.querySelector("#err_name");
    let lastName = document.querySelector("#last_name");
    let errLastName = document.querySelector("#err_last_name");
    let email = document.querySelector("#email");
    let errEmail = document.querySelector("#err_email");
    let phone = document.querySelector("#phone");
    let errPhone = document.querySelector("#err_phone");
    let password = document.querySelector("#password");
    let errPassword = document.querySelector("#err_password");
    let repassword = document.querySelector("#repassword");
    let errRepassword = document.querySelector("#err_repassword");
    let image = document.querySelector("#image");
    let errImage = document.querySelector("#err_image");
    let button = document.querySelector("#registerBtn");
    let form = document.querySelector("form");
    let inputForm = document.querySelectorAll("input")

    const expressions = {
        name: /^[a-zA-Z0-9\_\-]{2,16}$/, // Letras y espacios, pueden llevar acentos.
        last_name: /^[a-zA-ZÀ-ÿ\s]{2,16}$/, // Letras y espacios, pueden llevar acentos.
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/, // 8 a 15 caracteres, al menos una letra mayúscula, una minuscula, sin espacios, al menos un caracter especial, al menos un digito.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^\d{7,14}$/, // 7 a 14 numeros.
        emailExpresion: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    }

    name.focus();

    let errors = [];

    inputForm.forEach(input => input.addEventListener("blur", (e) => {
        //Name validations
        if (e.srcElement.name === "name") {
            if (name.value === "") {
                errors.name = "Este campo debe estar completo"
            } else if (name.value !== "") {
                errors.name = null
            }
        }
        //Last Name validations
        if (e.srcElement.name === "last_name") {
            if (lastName.value === "") {
                errors.lastName = "Este campo debe estar completo"
            } else if (lastName.value !== "") {
                errors.lastName = null
            }
        }
        //Email validations
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

        //Phone validations
        if (e.srcElement.name === "phone") {
            let phoneRegex = /^\d{7,14}$/;
            if (phone.value === "") {
                errors.phone = "Ingrese un telefono valido"
            }
            else if(isNaN(phone.value)){
                errors.phone = "Este campo solo puede contener numeros"
            }
            else if (phone.value.indexOf(" ") !== -1) {
                errors.phone = "No puede contener espacios"
            } else if (phone.value !== "" && phone.value.indexOf(" ") === -1 || (!isNaN(phone.value))) {
                errors.phone = null
            }
        }

        //Password validations
        if (e.srcElement.name === "password") {
            let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/
            if (password.value.length < 8) {
                errors.password = "Este campo debe tener minímo 8 caracteres"
            } else if (!(passwordValidation.test(password.value))) {
                errors.password = "Deberá tener letras mayúsculas, minúsculas, un número y un carácter especial."
            } else if (password.value >= 8 || (passwordValidation.test(password.value))) {
                errors.password = null
            }
    
        }
        if (e.srcElement.name === "repassword") {
            if (repassword.value !== password.value) {
                errors.repassword = "Las contraseñas no coinciden"
            } else if (repassword.value === password.value) {
                errors.repassword = null
            }
        }
        //Image validations

        if (e.srcElement.name === "image") {
            let filePath = image.value;
            let allowedExtensions = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
            if (!allowedExtensions.exec(filePath)) {
                errors.image = 'Las extensiones validas son .jpeg/.jpg/.png/.gif';
            } else {
                errors.image = null
            }
        }

         // Validation empty input
         if(!input.value.length) {
            e.preventDefault();
            button.disabled = true
            button.style.backgroundColor = "gray"
            button.style.cursor = "not-allowed"
       } else {
           button.disabled = false
           button.style.backgroundColor = "#081454"
           button.style.cursor = "pointer"
       }


        //check the errors
        if (Object.keys(errors).length >= 1) {
            e.preventDefault();
            errName.innerText = (errors.name) ? errors.name : "";
            errLastName.innerText = (errors.lastName) ? errors.lastName : "";
            errEmail.innerText = (errors.email) ? errors.email : "";
            errPhone.innerText = (errors.phone) ? errors.phone : "";
            errPassword.innerText = (errors.password) ? errors.password : "";
            errRepassword.innerText = (errors.repassword) ? errors.repassword : "";
            errImage.innerText = (errors.image) ? errors.image : "";
        } else {
            form.submit();
        }
    }))
})