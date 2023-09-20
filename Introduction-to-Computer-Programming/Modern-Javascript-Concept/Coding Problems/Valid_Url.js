function isValidURL(url) {
    // Your code goes here
    return /^(http|https|ftp):\/\/.*/.test(url)
}
console.log(isValidURL("http://google.com"));