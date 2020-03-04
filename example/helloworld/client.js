// run it using this command
// node client.js

// import piriz
const piriz = require("../../");
// const piriz = require("piriz");

// connect to server
const myService = new piriz("localhost")
console.log("piriz connected")

// // use server methods
myService.hello().then((res)=>{
  console.log("Service result", res)
})
