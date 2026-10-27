const http = require('http');
const os = require('os');
const path = require('path');
const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

console.log('OS Type:', os.type());
console.log('OS Platform:', os.platform());
console.log('OS Architecture:', os.arch());
console.log('CPU Cores:', os.cpus().length);
console.log('Current Working Directory:', process.cwd());

const joinedPath = path.join(__dirname, 'public', 'images');
console.log('Joined Path:', joinedPath);

eventEmitter.on('customEvent', (data) => {
  console.log('Custom Event Triggered:', data);
});

eventEmitter.emit('customEvent', { message: 'Hello from custom event!' });
