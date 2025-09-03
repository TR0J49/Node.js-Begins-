const http = require('http');

http.createServer((req, resp) => {
    resp.write("hello");
    resp.end();
}).listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});
