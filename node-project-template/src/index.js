import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
}).listen(9090, '127.0.0.1');

console.log('Server running at http://127.0.0.1:9090/');

export default server;
