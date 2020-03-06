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
    http.post('/' + method, async (req, res) => {
      let args = req.body
      let httpResult = {
        'ok': null,
        'res': null
      }

      try {
        let apiResult = api[method].apply({}, args)
        apiResult = await Promise.resolve(apiResult)
        httpResult.ok = true
        httpResult.res = apiResult
      } catch (error) {
        log("ERROR: method:", method, " args:", args)
        httpResult.ok = false
        if (error instanceof Error) {
          httpResult.nativeError = true
          httpResult.err = error.message
          log("ERROR Message:", error.message)
        } else {
          httpResult.nativeError = false
          httpResult.err = error
          log("ERROR Custom:", error)
        }
      }

      httpResult = JSON.stringify(httpResult)
      res.send(httpResult)
      res.end()
    })
  });
  http.listen(info.channelPort)
  log("http-json server is online on port " + info.channelPort)
}

exports.callServer = function (info, method, args) {
  let url = "http://" + info.host + ":" + info.channelPort + '/' + method
  return axios.post(url, args).then((res) => {
    let httpResult = res.data
    if (httpResult.ok) {
      return httpResult.res
    } else {
      if (httpResult.nativeError) {
        throw new Error(httpResult.err)
      } else {
        throw httpResult.err
      }
    }
  })
}
