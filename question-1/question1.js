// Declare the array
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

// Define the function lowerCaseWords to filter out strings and convert them to lowercase
lowerCaseWords = function(inputArray) {
    return new Promise((resolve, reject) => {
        if (inputArray.length > 0) {
            const filteredArray = inputArray
            .filter(element => typeof element === "string")
            .map(string => string.toLowerCase());
            return resolve(filteredArray)
        } else {
            return reject(new Error("Array is empty"));
        }   
    });
}

// Call the function (log if it is resolved or rejected)
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));