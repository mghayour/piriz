// small express server to pass info.json to client
const server = require('light-http-server');

function log(string){
  currentDateString = new Date().toISOString()
  console.log(currentDateString, string)
}

exports.start = function (info) {
  server.get('/', function (req, res) {
    res.send('This is piriz info server, plz visit <a href="/info.json">info.json</a>.')
  });
  server.get('/info.json', function (req, res) {
    let hostname = req.headers.host.split(":")[0]
    info['host'] = hostname
    res.send(info)
    log("info served")
  });
  server.listen(info.infoPort)
  log("info server is online on port " + info.infoPort)
}
