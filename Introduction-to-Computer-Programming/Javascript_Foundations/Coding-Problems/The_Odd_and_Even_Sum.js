function oddOrEvenSum(arr) {
    const obj = {
        oddSum: 0,
        evenSum: 0
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            obj.evenSum = obj.evenSum + arr[i];
        }
        else {
            obj.oddSum = obj.oddSum + arr[i];
        }
    }
    return obj;
}
console.log(oddOrEvenSum([10,13,12,23,45,30,40,90,87]));