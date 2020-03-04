/**
 * Author: Mahdi Ghayour
 * 
 * Simple data channel for piriz, based on http server and json data model
 */

const log = require("../helper/log")
const express = require('express')
const http = express()
const axios = require('axios');

exports.runServer = function (info, api) {
  info.methodList.forEach(method => {
    // TODO: pass args to api methods
    // TODO: support possible exceptions (it should propagate exceptions to client)
    http.get('/' + method, (req, res) => {
      let apiResult = api[method]()
      let httpResult = {
        'ok': true,
        'res': apiResult
      }
      httpResult = JSON.stringify(httpResult)
      res.send(httpResult)
    })
  });
  http.listen(info.channelPort)
  log("http-json server is online on port " + info.channelPort)
}

exports.callServer = function (info, method, args) {
  let url = "http://" + info.host + ":" + info.channelPort + '/' + method
  return axios.get(url).then((res) => {
    let serverRes = res.data
    return serverRes.res
  })
}