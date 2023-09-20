function findSecondSmallest(numbers) {
    let arr = numbers.sort();
    return arr[1];
}
console.log(findSecondSmallest([5, 2, 8, 1, 9]));