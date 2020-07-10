// this will convert string to portnumber, its usefull for using service name instead of port number

module.exports.getInfoPortNumber = function (serviceName) {
    return stringToPortNumber(serviceName + "")
}

stringToPortNumber = function(serviceName) {
  let range = Math.ceil((49151 - 1024)/2)
  serviceName = serviceName.toLowerCase()
  let port = hashFnv32a(serviceName)
  console.log(port)
  port = (port % range)*2 + 1024
  return port
}

/**
 * Calculate a 32 bit FNV-1a hash
 * Found here: https://gist.github.com/vaiorabbit/5657561
 * Ref.: http://isthe.com/chongo/tech/comp/fnv/
 *
 * @param {string} str the input value
 * @param {boolean} [asString=false] set to true to return the hash value as 
 *     8-digit hex string instead of an integer
 * @param {integer} [seed] optionally pass the hash of the previous chunk
 * @returns {integer | string}
 */
function hashFnv32a(str, asString, seed) {
  /*jshint bitwise:false */
  var i, l,
    hval = (seed === undefined) ? 0x811c9dc5 : seed;

  for (i = 0, l = str.length; i < l; i++) {
    hval ^= str.charCodeAt(i);
    hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }
  if (asString) {
    // Convert to 8 digit hex string
    return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
  }
  return hval >>> 0;
}