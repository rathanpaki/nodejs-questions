const fs = require("fs");

function readAndLogFile() {
  const filePath = "hello.txt";

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file from disk: ${err}`);
    } else {
      console.log(data);
    }
  });
}

// Call the function to read and log the file contents
readAndLogFile();
