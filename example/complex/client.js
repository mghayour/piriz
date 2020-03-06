// run it using this command
// node client.js

// import piriz
const piriz = require("../../");
// const piriz = require("piriz");

// connect to server
const myService = new piriz("localhost")
console.log("piriz connected")


main()
async function main() {
  // // use server methods

  let res = await myService.noResult()
  console.log("noResult:", res)

  res = await myService.arrayInput(["a", "b", 4, 0], "END")
  console.log("arrayInput:", res)

  res = await myService.objectInput({
    person: {
      name: "Mahdi",
      age: 17
    }
  })
  console.log("objectInput:", res)

  try {
    await myService.makeException(5)
  } catch (error) {
    console.log("makeException err:", error.message)
  }

  res = await myService.promiseResultOK(2)
  console.log("promiseResultOK:", res)

  try {
    await myService.promiseResultFail()
  } catch (error) {
    console.log("promiseResultFail ERROR:", error)
  }

  try {
    await myService.promiseResultFailComplex(17)
  } catch (error) {
    console.log("promiseResultFailComplex ERROR:", error)
  }

}
