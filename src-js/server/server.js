// import passed file in args
// check its constants that starts with PIRIZ_
// add its functions to api list
// start target channel
// wait for function call and respond to it
// also it should support exceptions

const path = require('path')
const fs = require('fs');
const infoServer = require('./infoServer');
const portNumber = require("../helper/portNumber")
const log = require("../helper/log")

exports.start = function (args) {
  // read api file
  apiFilename = args[0]
  let processpath = process.cwd();
  apiFullPath = path.join(processpath, apiFilename)
  if (!fs.existsSync(apiFullPath)) {
    log("ERROR: current directory does not contains " + apiFilename);
    log("make sure that you are running piriz on correct directory");
    process.exit(1);
  }
  api = require(apiFullPath)

  // create server info
  info = {
    'name': undefined,
    'host': undefined,
    'infoPort': 2679,
    'channelPort': undefined,
    'channelType': 'http-json',
    'methodList': []
  }
  if (api.PIRIZ_SETTING) {
    for (const key in api.PIRIZ_SETTING) {
      if (key in info) {
        info[key] = api.PIRIZ_SETTING[key];
      }
    }
  }

  if (info.name) {
    log("using hash of service name for portNumber")
    info.infoPort = portNumber.getInfoPortNumber(info.name);
  }
  if (!info.channelPort) {
    info.channelPort = info.infoPort + 1;
  }

  // update methodList
  for (const key in api) {
    if (typeof api[key] == "function") {
      info.methodList.push(key)
    }
  }

  // start info server
  infoServer.start(info)

  // start target channel
  targetChannel = require("../channel/" + info.channelType)
  targetChannel.runServer(info, api)

}
