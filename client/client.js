// pass an object that could be instantiate
// get info url in constructor
// user can wait for initialize finish (waitForInitialazation)
// call user functions with channel type and get response back
const axios = require('axios');
const log = require("../helper/log")

class PirizClient {

  constructor(host, infoPort=2679) {
    this.host = host;
    this.infoPort = infoPort;
    this.getServiceInfo().catch(()=>{
      log("Cant connect to PirizServer at " + host + ":" + infoPort)
      process.exit(1)
    })
  }

  async getServiceInfo() {
    let info = await axios.get("http://" + this.host + ":" + this.infoPort + '/info.json');
    this.info = info
    console.log(info.data)
  }

}
module.exports = PirizClient