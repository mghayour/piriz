/**
 * Author: Mahdi Ghayour
 * 
 * Simple data channel for piriz, based on http server and json data model
 */

const log = require("../helper/log").log

exports.runServer = function(info, api) {
  log("runServer", info)
}

exports.callServer = function(info, method, args) {
  console.log("callServer", info)
}