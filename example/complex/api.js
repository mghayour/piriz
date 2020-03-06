// run it using this command
// piriz start api.js

// noting to return
exports.noResult = function () {
  a = "some staff"
}

// return promise
exports.promiseResult = function (inputNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(inputNumber + 10), 2000 * Math.random())
    setTimeout(reject, 2000 * Math.random())
  })
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
exports.exception = function (a) {
  return a.notExitedFunction()
}

