const http = require('http');

function createServer() {
    const server = http.createServer((req, res) => {
        res.statusCode = 200; // Set the status code to 200 (OK)
        res.setHeader('Content-Type', 'text/plain'); // Set the content type to plain text
        res.end('Welcome to Uki'); // Send the response message
    });

    // Make the server listen on port 3000
    server.listen(3001, () => {
        console.log('Server is listening on port 3001');
    });
}

// Call the function to create and start the server
createServer();