const dns = require("dns");

dns.lookup("yahoo.com", (err, address, family) => {
  if (err) console.log(err);
  console.log("lookup-address: %s, family: IPV%s", address, family);
});

dns.resolve4("yahoo.com", (err, addresses) => {
  if (err) console.log(err);
  console.log(`resolve4-address: ${JSON.stringify(addresses)}`);
});

console.log(`getServers: ${dns.getServers()}`);

dns.lookupService("74.6.143.25", 22, (err, hostname, service) => {
  if (err) throw err;
  console.log(`hostname: ${hostname}, and service: ${service}`);
});
