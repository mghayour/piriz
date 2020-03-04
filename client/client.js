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
    this._getServiceInfo().catch(()=>{
      log("Cant connect to PirizServer at " + host + ":" + infoPort)
      process.exit(1)
    })
    // wait for info !
  }

  async _callServiceMethod(method, args) {
    return axios.get("http://" + this.host + ":" + this.channelPort + '/' + method);
  }

  async _getServiceInfo() {
    let info = await axios.get("http://" + this.host + ":" + this.infoPort + '/info.json');
    this.info = info.data
    this.info.methodList.forEach(method => {
      // TODO: support function args
      // TODO: support possible exceptions
      this[method] = () => {
        return _callServiceMethod(method)
      }
    });
  }

}
module.exports = PirizClient