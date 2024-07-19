function getRandomNumberAfterDelay() {
  return new Promise((resolve) => {
    // Set a delay of 2 seconds (2000 milliseconds)
    setTimeout(() => {
      // Generate a random number
      const randomNumber = Math.random();
      // Resolve the promise with the random number
      resolve(randomNumber);
    }, 2000);
  });
}

// Example usage
getRandomNumberAfterDelay().then((randomNumber) => {
  console.log("Random number after 2 seconds:", randomNumber);
});
