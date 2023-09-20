function findNestedValue(obj, propertyPath) {

    // split the property path from . operator and convert into an array
    const properties = propertyPath.split(".");
    let currentvalue = obj;

    // traverse each element of the properties array
    for (const property of properties) {

        // check if the current value is not an object and not equal to the null value
        if (!currentvalue && typeof currentvalue !== 'object') {
            return null;
        }

        // check if the current value has included proerites in object properties array
        if (!currentvalue.hasOwnProperty(property)) {
            return null;
        }
        
        // go deeper into object of properties array
        currentvalue = currentvalue[property];
    }
    return currentvalue;
}
let obj={"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}};
let propertyPath="person.address.city";

console.log(findNestedValue(obj, propertyPath));