// author: mahdi ghayour
var Cli = {};

function help() {
  var pjson = require('../package.json');
  // ascii art generated with https://www.askapache.com/online-tools/figlet-ascii/

  console.log(" ____  _      _     ");
  console.log("|  _ \\(_)_ __(_)____");
  console.log("| |_) | | '__| |_  /");
  console.log("|  __/| | |  | |/ / ");
  console.log("|_|   |_|_|  |_/___|  Ver " + pjson.version);
  console.log("                               ");
  console.log("Usage: piriz <command> <args>   ");
  console.log("                               ");
  console.log("Commands:                      ");
  console.log("help          see current help");
  console.log("-v            current version");
  console.log("start api.js  start server with given file");
}


Cli.run = function (args) {
  return new Promise((resolve, reject) => {

    // hello world
    // console.log("args is:",args);

    let ok = false;

    // current package version
    if (args[2] == '-v') {
      var pjson = require('../package.json');
      console.log('Piriz', 'v' + pjson.version);
      process.exit(1);
      ok = true;
    }

    // start server
    if (args[2] == 'start') {
      const server = require('../src-js/server/server.js');
      server.start(args.slice(3));
      ok = true;
    }

    // help
    if (args[2] == 'help' || !ok) {
      if (!ok && (args.length > 2 && args[2] != 'help')) {
        console.log("ERROR: command not found");
        console.log("args: ", args);
        console.log();
      }
      help();
      process.exit(1);
    }

    resolve();
  });
}
module.exports = Cli;