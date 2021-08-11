import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:8081');

ws.on('open', function open() {
});

ws.on('message', function incoming(message) {
  console.log('received: %s', message);
});


/* //web app
var conn = new WebSocket('ws://localhost:8081', 'echo-protocol');
conn.onopen = function(e) {
    console.log("Connection established!");
};

conn.onmessage = function(e) {
    console.log(e.data);
}*/
