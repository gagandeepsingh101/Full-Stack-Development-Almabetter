function generateSlug(title) {
    // Write your code inside this function only.
    title = title.toLowerCase();
    title=title.replace(/ /g,"-")
    return title+".com";
}
console.log(generateSlug("Hello World"));