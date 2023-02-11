function Validate(username, password) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    var errors = {};
    errors["username"] = username;
    errors["password"] = password;

    if (!username) {
        errors.username = "Se requiere un nombre/email";
    }
    if (!regexEmail.test(username)) {
        errors.email = "Debe ser un correo electrónico";
    }
    if (!password) {
        errors.password = "Se requiere password";
    }

    return errors;
}

export default Validate;