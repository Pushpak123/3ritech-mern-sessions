const net = require("net");

const client = new net.Socket();

client.connect(1337, "127.0.0.1", function () {
  console.log("its connected");
  client.write(`data passed - connection closed!`);
});

client.on("data", function (data) {
  console.log(`received: ${data}`);
});
