function findLongestCommonPrefix(strs) {

    //  set first word of strs array as prefix
    let prefix = strs[0];

    // traverse all word of strs array
    for (let i = 1; i <= strs.length - 1; i++) {

        // let find common Prefix from prefix word or current strs word
        prefix = commonPrefixUtil(prefix, strs[i]);
    }

    return (prefix);
}
function commonPrefixUtil(str1, str2) {

    let result = "";
    let n1 = str1.length, n2 = str2.length;

    // traverse str1 and str2 word
    for (let i = 0, j = 0; i <= n1 - 1 && j <= n2 - 1; i++, j++) {

        // Compare each element of the str1 and str2 if it is not equal the break the loop
        if (str1[i] != str2[j]) {
            break;
        }
        
        // Compare each element of the str1 and str2 are equal then append into the result
        result += str1[i];
    }

    return (result);
}

let strs = ["flower", "flow", "flight"];
console.log(findLongestCommonPrefix(strs));