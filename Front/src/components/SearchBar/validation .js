
export default function validation (search) {
    const regexNumber = /^[0-9]{0,3}$/i;

    var errors = []

    if (!regexNumber.test(search)){
        errors.push("Debe ser un numero entre 0 y 826");
    }

    return errors
}

