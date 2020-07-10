// run it using this command
// node client.js

// import piriz
const piriz = require("../../");
// const piriz = require("piriz");

// connect to services, using service name
const service1 = piriz.connect("localhost", "HeLlO") // service name is not case-sensitive
const service2 = piriz.connect("localhost", "salam")
console.log("piriz connected")

// // use server methods
service1.sayHi().then((res) => {
  console.log("service1:", res)
})

service2.sayHi().then((res) => {
  console.log("service2:", res)
})
