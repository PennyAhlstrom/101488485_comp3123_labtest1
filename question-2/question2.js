// Define the function resolvedPromise
const resolvedPromise = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve({message: 'delayed success!'});
        // reject - we don't want to reject so not called
        }, 500)
    })
}

// Define the function rejectedPromise
const rejectedPromise = function() {
    return new Promise((resolve, reject) => {
           setTimeout(() => {
            // resolve - we don't want to resolve so not called
            reject({error: 'delayed exception!'});
        }, 500)
    })
}

// Call resolvedPromise
resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));

// Call rejectedPromise
rejectedPromise()
    .then(result => console.log(result)) // There was no resolve in the function to this will now show
    .catch(error => console.error(error));