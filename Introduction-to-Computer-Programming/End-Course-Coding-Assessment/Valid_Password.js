function isValidPassword(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(password);
}
console.log(isValidPassword("Abc3535!"));