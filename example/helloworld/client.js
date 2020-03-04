// import piriz
const piriz = require("piriz");

// connect to server
const myService = new piriz("localhost")
await myService.waitForInit()

// use server methods
res = await myService.hello()
console.log("Service result", res)
