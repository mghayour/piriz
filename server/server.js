// import passed file in args
// check its constants that starts with PIRIZ_
// add its functions to api list
// start target channel
// wait for function call and respond to it
// also it should support exceptions

const path = require('path')
const fs = require('fs');

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
    'dataPort': 2680,
    'channelType': 'http-json',
    'apiList': []
  }
  if (api.PIRIZ_SETTING) {
    for (const key in api.PIRIZ_SETTING) {
      if (info[key]) {
        info[key] = api.PIRIZ_SETTING[key];
      }
    }
  }

  // update apiList
  for (const key in api) {
    if (typeof api[key] == "function") {
      info.apiList.push(key)
    }
  }

  // run info server
  console.log(info)

  // run target channel 

}
