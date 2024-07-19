function resolveAllPromises(promises) {
    return Promise.all(promises);
}

// Example usage
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

resolveAllPromises([promise1, promise2, promise3])
    .then((resolvedValues) => {
        console.log('Resolved values:', resolvedValues); // Output: Resolved values: [1, 2, 3]
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });