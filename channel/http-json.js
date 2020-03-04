/**
 * Author: Mahdi Ghayour
 * 
 * Simple data channel for piriz, based on http server and json data model
 */

const log = require("../helper/log")
const express = require('express')
const bodyParser = require('body-parser');
const http = express()
const axios = require('axios');
http.use(bodyParser.json());

exports.runServer = function (info, api) {
  info.methodList.forEach(method => {
    // TODO: support possible exceptions (it should propagate exceptions to client)
    http.post('/' + method, (req, res) => {
      args = req.body
      let apiResult = api[method].apply({}, args)
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
  // todo: support exception
  return axios.post(url, args).then((res)=>res.data.res)
}