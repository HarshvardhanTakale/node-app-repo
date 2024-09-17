const os = require('os');

console.log('My first app');
console.log(`File Name: ${__filename}`);
console.log(`Directory Name: ${__dirname}`);
console.log(` Global : ${global}`);
console.log(` Console : ${console}`);
console.log(` Process : ${process}`);
console.log(` Module : ${module}`);
console.log("=============== Built in Module - OS =======================");
console.log(`Arch: ${os.arch()}`);
console.log(`CPUS : ${os.cpus()}`);
console.log(`Free Mem : ${ os.freemem()}`);
console.log(`Total Mem ${os.totalmem()}`);
console.log(` Host Name ${os.hostname()}`);
console.log(` Platform : ${os.platform()}`);
console.log(` Release ${os.release()}`);
console.log(` Type ${os.type()}`);
console.log(`Uptime : ${os.uptime()}`);
console.log(` userInfo ${os.userInfo()}`);



