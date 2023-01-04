var buf = new Buffer.alloc(10); // octets
var buf = new Buffer([23, 98, 56]);
var buf = new Buffer("nodejs is built on chrome v8 engine", "utf-8");

var buf = new Buffer.alloc(256);
var len = buf.write("the buffer is used to save the raw data");
console.log(`the no of octets written: ${len}`);

var buf = new Buffer.alloc(15);
console.log(`the no of octets of buffer: ${buf}`);

var buf = new Buffer.alloc(26);
for(var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
console.log(`buf: ${buf.toString('ascii')}`);
console.log(`buf: ${buf.toString('ascii', 2, 8)}`);
console.log(`buf: ${buf.toString('utf-8', 4, 9)}`);
console.log(`buf: ${buf.toString(undefined, 5, 12)}`);
