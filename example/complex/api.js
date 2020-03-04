// run it using this command
// piriz start api.js

// noting to return
exports.noResult = function () {
  a = "some staff"
}

// return promise
exports.promiseResult = function (a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000)
  })
}

// input array
exports.arrayInput = function (arr, lastOne) {
  arr.push(lastOne)
  return arr.join(", ")
}

// input object
// input nested object
// exception happends

