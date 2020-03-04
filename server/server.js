// import passed file in args
// check its constants that starts with PIRIZ_
// add its functions to api list
// start target channel
// wait for function call and respond to it
// also it should support exceptions

const path = require('path')
const fs = require('fs');

exports.start = function(args) {
  apiFilename = args[0]
  let processpath = process.cwd();
  apiFullPath = path.join(processpath, apiFilename)
  if (!fs.existsSync(apiFullPath)) {
    console.log("ERROR: current directory does not contains " + apiFilename);
    console.log("make sure that you are running piriz on correct directory");
    process.exit(1);
  }

  api = require(apiFullPath)
  console.log("TEST", api.TEST)

}
