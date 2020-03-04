// run it using this command
// node client.js

// import piriz
const piriz = require("../../");
// const piriz = require("piriz");

// connect to server
const myService = new piriz("localhost")
console.log("piriz connected")

// // use server methods
myService.noResult().then((res) => {
  console.log("noResult result:", res)
})

myService.arrayInput(["a", "b", 4, 0], "END").then((res) => {
  console.log("arrayInput result:", res)
})
