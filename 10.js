const axios = require("axios"); // Import the Axios library
// A promise-based HTTP client for making HTTP requests.

function fetchDataFromApi() {
  const apiUrl = "https://random-data-api.com/api/v2/addresses"; // API endpoint URL

  // Return a Promise
  return axios
    .get(apiUrl) //a Promise that resolves with the response object.
    .then((response) => {
      // If the request is successful, resolve the Promise with the response data
      return response.data;
    })
    .catch((error) => {
      // If the request fails, reject the Promise with an error message
      return Promise.reject(
        new Error("Failed to fetch data from API: " + error.message)
      );
    });
}

fetchDataFromApi() // start the process of making an HTTP GET request to the specified API endpoint.
  .then((data) => {
    // Log the response data if the request is successful
    console.log("API response data:", data);
  })
  .catch((error) => {
    // Log the error message if the request fails
    console.error("Error:", error.message);
  });

// The purpose of this code is to handle the response of a Promise-based
// asynchronous operation, such as an API request.
