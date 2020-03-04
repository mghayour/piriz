// pass an object that could be instantiate
// get info url in constructor
// user can wait for initialize finish (waitForInitialazation)
// call user functions with channel type and get response back
const http = require('http')

class PirizClient {

  constructor(host, infoPort=2679) {
    this.host = host;
    this.infoPort = infoPort;
    this.getServiceInfo()
  }

  getServiceInfo() {
    http.get({
      hostname: this.host,
      port: this.infoPort,
      path: '/info.json',
      // agent: false  // Create a new agent just for this one request
    }, (res) => {
      // Do stuff with response
      console.log(res.json)
    });
  }

}
module.exports = PirizClient