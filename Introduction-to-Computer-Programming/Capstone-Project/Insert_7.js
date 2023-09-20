function insert7(inputString) {
    // Write your code inside this function only.
    let output = [];
    let charCount = 0;

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];

        if (char !== ' ') {
            charCount++;
            output.push(char);

            if (charCount === 6) {
                output.push('7');
                charCount = 0;
            }
        } else {
            output.push(char);
        }
    }

    return output.join('');
}

console.log(insert7("Full Stack Web Development"));
