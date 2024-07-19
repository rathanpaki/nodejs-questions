function sumArray(numbers) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(numbers)) {
            return reject(new Error('Input must be an array'));
        }

        const sum = numbers.reduce((acc, num) => {
            if (typeof num !== 'number') {
                reject(new Error('Array must contain only numbers'));
            }
            return acc + num;
        }, 0);

        resolve(sum);
    });
}

// Example usage
sumArray([1, 2, 3, 4, 5])
    .then((sum) => {
        console.log('Sum of array:', sum); // Output: Sum of array: 15
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });