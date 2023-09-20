var arr = [1, 2, 15, 4, 5];

// fetch single array element with index
console.log(arr[3]);
console.log(arr);

// change element to array at 3rd index
arr[2] = 3;
console.log(arr);

// add element to array at last index
arr.push(6);
console.log(arr);

// remove element to array at last index
arr.pop();
console.log(arr);

// add element to array at first index
arr.unshift(6);
console.log(arr);

// remove element to array at first index
arr.shift();
console.log(arr);

// show small part of array from 0 to 2 index 
console.log(arr.slice(0, 3));

//  with splice funcion we can add and remove multiple elements in array
// splice(index_at_which_want_to_add_value , number_of_elements_wants_to_be_deleted , elments_which_want_to_be_added_in_array);
console.log(arr);

// add elements at 5th position
arr.splice(5, 0, 6, 7, 8, 9, 9);
console.log(arr);

// remove elements at 9th position
arr.splice(9, 1);
console.log(arr);

// give its first index position where is located in the array
console.log(arr.indexOf(5));


// give its last index position where is located in the array
arr.push(5);
console.log(arr.lastIndexOf(5));
arr.pop();

// find() it finds elements in the array is present or not
console.log(arr.find(num => num == 5));

// filter() it filters elements of the array according to the conditions
console.log(arr.filter(num => num > 5));

// map() it maps every single element of the array according to the conditions
console.log(arr.map(num => num * 2));

// reduce() it reduces every elements  of the array in single result according to the conditions
console.log(arr.reduce((a, b) => a + b));

// conacat() it add two array elements in single array and then return it
console.log(arr.concat([10, 11, 12, 13, 14, 15]));

// join() it join every element of the array with given character or string to return as string
console.log(arr.join(","));

// reverse() it reverse the array elements and return all elements in array
console.log(arr.reverse());

let multiDimensionalArray = [[1, 2, 3], [4, 5, 6]];
console.log(multiDimensionalArray);

// it prints the array first row
console.log(multiDimensionalArray[0]);

// it prints the array first row 2nd element
console.log(multiDimensionalArray[0][1]);

// it push subarray in last row of array;
multiDimensionalArray.push([7, 8]);
console.log(multiDimensionalArray);

// it push element in last index subarray in array;
multiDimensionalArray[2].push(9);
console.log(multiDimensionalArray);

// it push element in last index subarray in array;
multiDimensionalArray[2].push(9);
console.log(multiDimensionalArray);

// it pop inner array of outer array;
multiDimensionalArray.pop();
console.log(multiDimensionalArray);

// it pop element from inner array of outer array;
multiDimensionalArray[1].pop();
console.log(multiDimensionalArray);

// it pop element from inner array of outer array;
multiDimensionalArray.splice(1, 1);
console.log(multiDimensionalArray);

// iterate array of element one by one
multiDimensionalArray.forEach((ele) => {
    ele.forEach((innerEle) => console.log(innerEle));
});

// iterate array of element one by one
for (let i of multiDimensionalArray) {
    for (let j of i) {
        console.log(j);
    }
}