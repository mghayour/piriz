// run it using this command
// node client.js

// import piriz
const piriz = require("../../");
// const piriz = require("piriz");

// connect to services, using service name
const service1 = piriz.connect("localhost", "HeLlO") // service name is not case-sensitive
const service2 = piriz.connect("localhost", "salam")
console.log("piriz connected")


main()
async function main() {
  ok = true

  // // use server methods
  res = await service1.sayHi()
  console.log("service1:", res)
  ok = ok && res=="Hello World, Im working"
  
  res = await service2.sayHi()
  console.log("service2:", res)
  ok = ok && res=="Salam donya, man kar mikonam"

  if(ok)
    console.log("TEST_PASSED")
}