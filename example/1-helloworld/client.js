// run it using this command
// node client.js

// import piriz
const piriz = require("../../");
// const piriz = require("piriz");

// connect to server
const myService = piriz.connect("localhost")
console.log("piriz connected")

main()
async function main() {
  ok = true

  // // use server methods
  res = await myService.hello()
  console.log("Hello result:", res)
  ok = ok && res=="Hello World, Im working"
  
  res = await myService.add(1025, 2)
  console.log("Add result:", res)
  ok = ok && res==1027
  
  if(ok)
    console.log("TEST_PASSED")
}