// run it using this command
// node client.js

// import piriz
const piriz = require("../../");
// const piriz = require("piriz");

// connect to server
const myService = new piriz("localhost")
// await myService.waitForInit() // or wait internally in above ?!

// // use server methods
res = myService.hello()
console.log("Service result", res)
