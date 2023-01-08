const StringDecoder = require("string_decoder").StringDecoder;
const decoder = new StringDecoder();

const buf1 = new Buffer("this is a sample string", "utf-8");
console.log(decoder.write(buf1));

const buf2 = new Buffer("98", "hex");
console.log(decoder.write(buf2));

const buf3 = new Buffer.from([0x76, 0x35]);
console.log(decoder.write(buf3));
