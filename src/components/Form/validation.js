function Validation({username, password}) {
   

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^[a-zA-Z0-9]{6,10}$/i;
    
    var errors = {
    };
    
    if (!username || !regexEmail.test(username)) {
        errors.username = "Debe ser un correo electrónico"; 
    }  
    if (username.length > 35) {
        errors.username = "No puede tener mas de 35 caracteres";
    }
    if (!password || !regexPassword.test(password) || !password.match(/\d/)) {
        errors.password = "De tener 1 numero y ser entre 6 y 10 caracateres";
    }
   
    return errors;
}

export default Validation;