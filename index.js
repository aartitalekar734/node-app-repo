const os = require('os');

console.log('My first app');
console.log(`File Name: ${__filename}`);
console.log(`Directory Name: ${__dirname}`);

console.log("=============== Built in Module - OS =======================");
console.log(`Arch: ${os.arch()}`);
console.log(`Array of object:${os.cpus()}`);
console.log(`Free system memory:${os.freemem()}`);

console.log(`Total memory:${os.totalmem()}`);

console.log(`Host Name:${os.hostname()}`);

console.log(`platform:${os.platform()}`);

console.log(`release:${os.release()}`);
console.log(`type:${os.type()}`);
console.log(`uptime:${os.uptime()}`);

console.log(`user info:${os.userInfo()}`);




