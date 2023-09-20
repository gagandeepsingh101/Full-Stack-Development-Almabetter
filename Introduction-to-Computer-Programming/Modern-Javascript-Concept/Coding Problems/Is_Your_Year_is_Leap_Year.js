function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLeapYear(2000));
console.log(isLeapYear(2002));