// Create a directory named "node" and a file named "node.txt" inside it, then write a log message to the file.

const fs = require('fs');
const path = require('path');

function createDirectoryAndLogMessage() {
    const dirPath = path.join(__dirname, 'node');
    const filePath = path.join(dirPath, 'node.txt');
    const message = 'This is a log message';

    // Create the directory
    fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) {
            return console.error('Error creating directory:', err);
        }

        // Write the message to the file
        fs.writeFile(filePath, message, (err) => {
            if (err) {
                return console.error('Error writing to file:', err);
            }

            console.log('Directory and file created successfully');
        });
    });
}

// Call the function
createDirectoryAndLogMessage();