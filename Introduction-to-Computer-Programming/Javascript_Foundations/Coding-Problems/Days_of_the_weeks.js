function getDayOfWeek(dateString) {
    // Your code goes here
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    let dt = new Date(dateString);
    return days[dt.getDay()];
}
console.log(getDayOfWeek("2023-07-23"));