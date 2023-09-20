var mostCommonWord = function (paragraph, banned) {
    // split the paragraph from where it \W matches any non-word character (equivalent to [^a-zA-Z0-9_])
    let arr = paragraph.toLowerCase().split(/\W+/g)
    let map = {}

    // traverse every element in the array;
    for (let word of arr) {

        // if word is not in the map then initialize word in map
        if (!map[word]) {
            map[word] = 1
        }

        // if word is present in the map then increment it 
        else {
            map[word]++
        }
    }

    // retrun array of keys
    return Object.keys(map)

        // sort keys according its values in descending order
        .sort((a, b) => {
            return map[b] - map[a]
        })

        // filter the array of keys that does not contain banned word in it and return first index
        .filter(word => !banned.includes(word))[0]
};

let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
let banned = ["hit"];
console.log(mostCommonWord(paragraph, banned));