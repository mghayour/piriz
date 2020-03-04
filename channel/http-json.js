/**
 * Author: Mahdi Ghayour
 * 
 * Simple data channel for piriz, based on http server and json data model
 */

const log = require("../helper/log").log
const express = require('express')
const http = express()

exports.runServer = function(info, api) {
  info.methodList.forEach(method => {
    // TODO: pass args to api methods
    http.get('/' + method, (req, res) => res.send(api[method]()))
  });
  http.listen(info.channelPort)
  log("http-json server is online on port " + info.channelPort)
}

exports.callServer = function(info, method, args) {
  console.log("callServer", info)
}