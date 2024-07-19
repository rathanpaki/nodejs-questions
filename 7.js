function rejectAfterDelay() {
    return new Promise((_, reject) => {
        // Set a delay of 1500 milliseconds (1.5 seconds)
        setTimeout(() => {
            // Reject the promise with an error message
            reject(new Error('An error occurred after 1500ms'));
        }, 1500);
    });
}

// Example usage
rejectAfterDelay()
    .then(() => {
        // This block will not be executed because the promise is rejected
    })
    .catch((error) => {
        console.error('Promise rejected:', error.message);
    });