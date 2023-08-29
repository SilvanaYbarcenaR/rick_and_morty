const validation = (userData) => {
    const errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const numbersRegex = /\d/;

    if (userData.email.length === 0) {
        errors.email = "Email can't be empty.";
    } else if (!emailRegex.test(userData.email)) {
      errors.email = "Email adress is not valid.";
      console.log(errors);
    } else if (userData.email.length > 35) {
      errors.email = "Limit is 35 characters.";
    }
    if (userData.password.length === 0) {
        errors.password = "Password can't be empty.";
    } else if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "Password must be between 6 and 10 characters long.";
    } else if (!numbersRegex.test(userData.password)) {
      errors.password = "Password must contain a number.";
    } 

    return errors;
}

export default validation;