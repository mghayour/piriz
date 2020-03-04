// import passed file in args
// check its constants that starts with PIRIZ_
// add its functions to api list
// start target channel
// wait for function call and respond to it
// also it should support exceptions

const path = require('path')
const fs = require('fs');
const infoServer = require('./infoServer');

exports.start = function (args) {
  // read api file
  apiFilename = args[0]
  let processpath = process.cwd();
  apiFullPath = path.join(processpath, apiFilename)
  if (!fs.existsSync(apiFullPath)) {
    console.log("ERROR: current directory does not contains " + apiFilename);
    console.log("make sure that you are running piriz on correct directory");
    process.exit(1);
  }
  api = require(apiFullPath)

  // create server info
  info = {
    'host': 'N/A',
    'infoPort': 2679,
    'channelPort': 2680,
    'channelType': 'http-json',
    'methodList': []
  }
  if (api.PIRIZ_SETTING) {
    for (const key in api.PIRIZ_SETTING) {
      if (info[key]) {
        info[key] = api.PIRIZ_SETTING[key];
      }
    }
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
