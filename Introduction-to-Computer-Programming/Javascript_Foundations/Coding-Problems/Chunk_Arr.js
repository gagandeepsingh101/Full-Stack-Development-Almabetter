var chunk = function(arr, size) {
    let temp_arr=[];
    let res_arr=[];
    for (let i = 0; i < arr.length; i++) {
        temp_arr.push(arr[i]);
        if(temp_arr.length === size) {
            res_arr.push(temp_arr);
            temp_arr=[];
        }
    }
    if(temp_arr.length) {
        res_arr.push(temp_arr);
    }
    return res_arr;
};
console.log(chunk([1,2,3,4,5,6,7,8,9,10],3));

var chunkSmallBro = function(arr, size) {
    let res_arr=[];
    for (let i = 0; i <arr.length; i+=size) {
        res_arr.push(arr.slice(i, i + size));
    }
    return res_arr;
};
console.log(chunkSmallBro([1,2,3,4,5,6,7,8,9,10],3));