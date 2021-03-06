// pass an object that could be instantiate
// get info url in constructor
// user can wait for initialize finish (waitForInitialazation)
// call user functions with channel type and get response back
const log = require("../helper/log")
const portNumber = require("../helper/portNumber")
var request = require('sync-request');

class PirizClient {

  constructor(host, serviceName="") {
    this.host = host;
    this.infoPort = portNumber.getInfoPortNumber(serviceName);
    this._getServiceInfo()
  }

  async _callServiceMethod(method, args) {
    let targetChannel = require("../channel/" + this.info.channelType)
    return targetChannel.callServer(this.info, method, args)
  }

  async _getServiceInfo() {
    let url = "http://" + this.host + ":" + this.infoPort + '/info.json'
    try {
      var res = request('GET', url);
      const me = this
      me.info = JSON.parse(res.getBody())
      me.info.methodList.forEach(method => {
        me[method] = function (...args) {
          return me._callServiceMethod(method, args)
        }
      });      
      log(me.info)
    } catch (error) {
      log("Piriz connection failed", url)
      log(error)
      process.exit(1)
    }
  }

}
module.exports = PirizClient