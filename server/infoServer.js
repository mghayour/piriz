// small express server to pass info.json to client
const express = require('express')
const http = express()
const log = require("../helper/log").log

exports.start = function (info) {
  http.get('/', function (req, res) {
    res.send('This is piriz info server, plz visit <a href="/info.json">info.json</a>.')
  });
  http.get('/info.json', function (req, res) {
    let hostname = req.headers.host.split(":")[0]
    info['host'] = hostname
    res.send(info)
    log("info served")
  });
  http.listen(info.infoPort)
  log("info server is online on port " + info.infoPort)
}
