function arrayIntersection(array1, array2) {
    // Write your code inside this function only.
    let res = new Set();
    for (var i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            res.add(array1[i]);
        }
    }
    return Array.from(res);
}
console.log(arrayIntersection([70, 20, 30, 50], [30, 40, 50, 60, 70]
));