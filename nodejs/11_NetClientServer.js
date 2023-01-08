const net = require("net");

const server = net.createServer(function (socket) {
  socket.write("echo server \r\n");
  socket.pipe(socket);
});

const client = new net.Socket();

client.connect(1337, "127.0.0.1", function () {
  console.log("its connected");
  client.write(`hello server, we are client!`);
});

client.on("data", function (data) {
  console.log(`received: ${data}`);
});

client.on("close", function () {
  console.log("connection closed");
});

server.listen(1337, "127.0.0.1");
