// run it using this command
// node client.js

// import piriz
const piriz = require("../../");
// const piriz = require("piriz");

// connect to server
const myService = new piriz("localhost")
console.log("piriz connected")

// // use server methods
myService.hello().then((res) => {
  console.log("Hello result:", res)
})

myService.add(1, 2).then((res) => {
  console.log("Add result:", res)
})
