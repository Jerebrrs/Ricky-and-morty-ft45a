

export default function validation(input) {
    const errors = {};
    const regexEmail = /\S+@\S+\.\S+/;
    const regexPassword = new RegExp("[0-9]");

    //* email validation 
    if (!input.email.length) errors.email = "Ingrese su email";
    else {
        if (!regexEmail.test(input.email)) errors.email = "Debe ingresar un email valido";
        if (input.email.length > 35) errors.email = "El email debe ser menor a 35 caracteres";
    }
    if (!input.password.length) errors.password = "Ingrese su Password";
    if (!regexPassword.test(input.password)) errors.password = "Debe tener al menos un numero";
    if (input.password.length < 6) errors.password = "Al menos debe tener 6 caracteres"
    if (input.password.length >= 10) errors.password = "No mayor a 10 caracteres"
    return errors;
}

console.log(validation({
    email: "simon6@m.com",
    password: "ab5c257"
}))