// run it using this command
// node client.js

// import piriz
const piriz = require("../../");
// const piriz = require("piriz");

// connect to server
const myService = piriz.connect("localhost", "complex")
console.log("piriz connected")


main()
async function main() {
  ok = true

  // // use server methods
  let res = await myService.noResult()
  console.log("noResult:", res)
  ok = ok && res===undefined
  
  res = await myService.arrayInput(["a", "b", 4, 0], "END")
  console.log("arrayInput:", res)
  ok = ok && res==="a, b, 4, 0, END"
  
  res = await myService.objectInput({
    person: {
      name: "Mahdi",
      age: 17
    }
  })
  console.log("objectInput:", res)
  ok = ok && res===18

  try {
    await myService.makeException(5)
    ok = false
  } catch (error) {
    console.log("makeException err:", error.message)
    ok == ok && true
  }
  true
  res = await myService.promiseResultOK(2)
  console.log("promiseResultOK:", res)
  
  try {
    await myService.promiseResultFail()
    ok = false
  } catch (error) {
    console.log("promiseResultFail ERROR:", error)
    ok == ok && true
  }
  
  try {
    await myService.promiseResultFailWithObject(17)
    ok = false
  } catch (error) {
    console.log("promiseResultFailWithObject ERROR:", error)
    ok == ok && error.status=="working"
  }

  if(ok)
    console.log("TEST_PASSED")
}
