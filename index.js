const http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type': 'text/html'});
    resp.write("<h1>Hello from Node.js Server!</h1>");
    resp.end();
}).listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});
