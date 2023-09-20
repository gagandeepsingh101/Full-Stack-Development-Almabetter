let arr1=[1,2,3,4,5,6,7,8,9,10];
let arr2=[5,6,7,8,9,10,11,12,13,14,15];
function findCommonElements(arr1, arr2) {
    // Your code goes here
    let res = [];
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if ((arr1[i] === arr2[j])) {
                res.push(arr1[i]);
            }
        }
    }
    return res;
}
let res=findCommonElements(arr1,arr2);
console.log(res);