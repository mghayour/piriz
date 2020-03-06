// run it using this command
// piriz start api.js

// noting to return
exports.noResult = function () {
  a = "some staff"
}

// input array
exports.arrayInput = function (arr, lastOne) {
  arr.push(lastOne)
  return arr.join(", ")
}

// input object
exports.objectInput = function(obj) {
  return obj.person.age + 1
}

// exception happends
exports.makeException = function (a) {
  return a.notExitedFunction()
}

// return promise ok
exports.promiseResultOK = function (inputNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(inputNumber + 10), 2000 * Math.random())
  })
}

// return promise fail
exports.promiseResultFail = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Excpected Error!"), 2000 * Math.random())
  })
}

// return promise fail with object
exports.promiseResultFailComplex = function (inputNumber) {
  return new Promise((resolve, reject) => {
    let complexErrorStatus = {
      status: "working",
      threadnumber: 12,
      reason: "database",
      number: inputNumber
    }
    setTimeout(() => reject(complexErrorStatus), 2000 * Math.random())
  })
}
