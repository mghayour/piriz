![Piriz](/assets/logoV1.2.land.png)

Make webservice calls simple as function call

## What is this?
Piriz help you to get rid of microservices calls headache and make it simple just like a function call

## How can i use it ?
1. Install using npm
  - `npm i -g piriz`

### Server
1. start server using piriz command
  - `piriz start api.js`
```js
// api.js
exports.hello = function() {
  return "Hello World, Im working"
}
```

### Client
1. connect to server
2. use your functions
```js
// client.js
const piriz = require("piriz");
const myService = new piriz("localhost")

myService.hello().then((res) => {
  console.log("Hello result:", res)
})
```
For more examples, check [complex example](./example/complex)

## Port usage
By default Piriz use port 2679 for passing server info and 2680 for data channel

#### To change channel port
Just add PIRIZ_SETTING in your api file like this:
```js
// api.js
exports.hello = function() {
  return "Hello World, Im working"
}

exports.PIRIZ_SETTING = {
  'channelPort': 1020
}
```

#### To change info port
You should change PIRIZ_SETTING in your api file like this:
```js
// api.js
exports.hello = function() {
  return "Hello World, Im working"
}

exports.PIRIZ_SETTING = {
  'infoPort': 1019
}
```
Also use info port to initialize Piriz in client
```js
// client.js
const piriz = require("piriz", 1019);
const myService = new piriz("localhost")

myService.hello().then((res) => {
  console.log("Hello result:", res)
})
```

## Contribute
Feel free to open issue or make PR
If you want to join this, i think we need these codes:
automation tests (make it in ./test/test.js)
socketio channel (add it in ./src/channel)
socketio example (add it in ./example)
