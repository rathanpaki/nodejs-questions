const http = require("http");
const fs = require("fs");
const path = require("path");

function createServer() {
  const server = http.createServer((req, res) => {
    if (
      req.method === "POST" &&
      req.headers["content-type"] === "application/json"
    ) {
      let body = "";

      // Collect the data from the request
      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      // When all data is received
      req.on("end", () => {
        try {
          // Parse the JSON data
          const jsonData = JSON.parse(body);

          // Validate and sanitize the JSON data

          // Define the path to the config.json file
          const filePath = path.join(__dirname, "config.json");

          // Write the JSON data to the file
          fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
              res.statusCode = 500;
              res.setHeader("Content-Type", "text/plain");
              res.end("Error writing to file: " + err.message);
              console.error("Error writing to file:", err);
            } else {
              res.statusCode = 200;
              res.setHeader("Content-Type", "text/plain");
              res.end("Data saved to config.json");
            }
          });
        } catch (err) {
          res.statusCode = 400;
          res.setHeader("Content-Type", "text/plain");
          res.end("Invalid JSON data: " + err.message);
          console.error("Invalid JSON data:", err);
        }
      });
    } else {
      res.statusCode = 405;
      res.setHeader("Content-Type", "text/plain");
      res.end("Method Not Allowed");
    }
  });

  // Make the server listen on port 3000
  server.listen(4000, () => {
    console.log("Server is listening on port 4000");
  });
}

// Call the function to create and start the server
createServer();
