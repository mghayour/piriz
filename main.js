const client = require("./src/client/client.js")

module.exports.connect = function(host, port) {
  return new client(host, port)
}
