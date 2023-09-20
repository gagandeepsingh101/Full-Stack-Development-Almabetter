function isValidPhoneNumber(phoneNumber) {
    const regex = /^[7-9]\d{9}$/;
    return regex.test(phoneNumber);
}
console.log(isValidPhoneNumber(8593939393));