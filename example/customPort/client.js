// run it using this command
// node client.js

// import piriz
const piriz = require("../../");
// const piriz = require("piriz");

// connect to service
const myService = piriz.connect("localhost", 1234)

myService.hello().then((res) => {
  console.log("Hello result:", res)
})
