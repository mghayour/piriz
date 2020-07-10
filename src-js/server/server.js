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
const isPortReachable = require('is-port-reachable')

exports.start = async function (args) {
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
    'name': "",
    'host': undefined,
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

  log("using hash of service name for portNumber")
  infoPort = portNumber.getInfoPortNumber(info.name);
  channelPort = infoPort-1;
 
  infoPort = findFirstOpenPort(infoPort);
  channelPort = findFirstOpenPort(channelPort);
 
  info.infoPort = await infoPort;
  info.channelPort = await channelPort;

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

async function findFirstOpenPort(startPort) {
  for(let p=0;p<2000;p+=2) {
    let port = (startPort+p)
    if (port>=49150)
      port = (port-49150)+1024 // not tested yet
    let openedBefore = await isPortReachable(port);
    if(!openedBefore)
      return port
  }
}
