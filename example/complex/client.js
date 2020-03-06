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
  console.log("noResult:", res)
})

myService.promiseResult(2).then((res) => {
  console.log("promiseResult ok:", res)
}, (err) => {
  console.log("promiseResult err:", err)
})

myService.arrayInput(["a", "b", 4, 0], "END").then((res) => {
  console.log("arrayInput:", res)
})

myService.objectInput(
  {
    person: {
      name:"Mahdi",
      age: 17
    }
  }
).then((res) => {
  console.log("objectInput:", res)
})

myService.exception(5).then((res) => {
  console.log("exception ok:", res)
}, (err) => {
  console.log("exception err:", err)
})
