// Map:it is similar to Set but its present in key-value pairs

// new Map : it used create a new Map object
const fruits=new Map([["Apple",100]]);
console.log(fruits);

// set: it is used to add elements into the Map

fruits.set("Mango",200);
fruits.set("Banana",300);
fruits.set("Pineapple",400);
console.log(fruits);

// get : it is used to fetch the values from Map for a particular key value that given in get function parameter
console.log(fruits.get("Banana"));

// delete : it is used to delete the key-value pair from Map for a particular key
console.log(fruits.delete("Banana"));
console.log(fruits);

// has : it is used to find the particular key is present in the Map or not
console.log(fruits.has("Banana"));

// it return type of datatype to which it is belong to
console.log(typeof fruits);

// it check whether a fruit is created from Map or not // whether it is belong to Map Class or not
console.log(fruits instanceof Map);

// keys : returns only keys in the form of of object
console.log(fruits.keys());

// values : returns only values in the form of of object
console.log(fruits.values());

// entries : returns only key-pair array in the form of of object
console.log(fruits.entries());

// size : it is used find the size of the Map
console.log(fruits.size);

// clear : it is used clear all data from the Map
fruits.clear();
console.log(fruits);