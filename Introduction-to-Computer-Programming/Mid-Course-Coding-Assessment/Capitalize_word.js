function capitalizeWords(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");

}
let word = "this is a test";
console.log(capitalizeWords(word));