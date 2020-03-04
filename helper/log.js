exports.log = function (a, b = "", c = "", d = "") {
  currentDateString = new Date().toISOString()
  console.log(currentDateString, a, b, c, d)
}