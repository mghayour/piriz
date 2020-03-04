// pass an object that could be instantiate
// get info url in constructor
// user can wait for initialize finish (waitForInitialazation)
// call user functions with channel type and get response back
const log = require("../helper/log")
var request = require('sync-request');

class PirizClient {

  constructor(host, infoPort=2679) {
    this.host = host;
    this.infoPort = infoPort;
    this._getServiceInfo()
  }

  async _callServiceMethod(method, args) {
    let targetChannel = require("../channel/" + this.info.channelType)
    return targetChannel.callServer(this.info, method, args)
  }

  async _getServiceInfo() {
    let url = "http://" + this.host + ":" + this.infoPort + '/info.json'
    var res = request('GET', url);
    this.info = JSON.parse(res.getBody())
    this.info.methodList.forEach(method => {
      // TODO: support function args
      // TODO: support possible exceptions
      this[method] = () => {
        return this._callServiceMethod(method, arguments)
      }
    });
  }

}
module.exports = PirizClient