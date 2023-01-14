// importing the required modules
var events = require("events");

// creating the EventEmitter object
var eventEmitter = new events.EventEmitter();

// create an eventHandler
var connectHandler = function connected() {
  console.log("connection successful");

  // fire the dataReceived event
  eventEmitter.emit("dataReceived");
};

// bind the dataReceived with the anonymous function
eventEmitter.on("connection", connectHandler);

eventEmitter.on("dataReceived", function () {
  console.log("data received successfully!");
});

// fire the connection event
eventEmitter.emit("connection");
console.log("the eventEmitter process...");
