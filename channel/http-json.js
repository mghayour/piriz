/**
 * Author: Mahdi Ghayour
 * 
 * Simple data channel for piriz, based on http server and json data model
 */

const log = require("../helper/log")
const express = require('express')
const http = express()

exports.runServer = function(info, api) {
  info.methodList.forEach(method => {
    // TODO: pass args to api methods
    // TODO: support possible exceptions (it should propagate exceptions to client)
    http.get('/' + method, (req, res) => res.send(api[method]()))
  });
  http.listen(info.channelPort)
  log("http-json server is online on port " + info.channelPort)
}

exports.callServer = function(info, method, args) {
  console.log("callServer", info)
}