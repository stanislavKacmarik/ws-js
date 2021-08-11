import WebSocket, {WebSocketServer} from 'ws';

const wss = new WebSocketServer({port: 8081});

// wss.on('c')
// wss.on('connection', function connection(ws) {
//   function sendNumber() {
//     var number = Math.round(Math.random() * 0xFFFFFF);
//     console.log('sending '+ number+ ' from server')
//     ws.send( number);
//     setTimeout(sendNumber, 5000);
//   }
//   sendNumber();
// });

wss.on('connection', function connection(ws) {
  (function sendNumber() {
    var number = Math.round(Math.random() * 0xFFFFFF);
    console.log('sending ' + number);
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(number);
      }
    });
    setTimeout(sendNumber, 5000);
  })();

});

