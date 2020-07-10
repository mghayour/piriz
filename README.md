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
const myService = piriz.connect("localhost")

myService.hello().then((res) => {
  console.log("Hello result:", res)
})
```
Thats it! you have connected two microservices just like a function call!
for more examples, check [complex example](./example/3-complex).

### Port usage
By default Piriz use port 2679 for passing server info and 2680 for data channel

#### service name as port
You can use service name instead of port number, its great for running multiple service on same machine
```js
const service1 = piriz.connect("localhost", "hello")
const service2 = piriz.connect("localhost", "salam")
```
check [service name full example](./example/2-serviceName).

#### use your custom ports
using custom port is depricated, you must provide service name, and port will assign and found autmatically

## Contribute
Feel free to open issue or make PR,
if you want to join this, i think we need these codes:
- automation tests (make it in ./test/test.js)
- socketio channel (add it in ./src/channel)
- socketio example (add it in ./example)
- docker and docker-compose example (add it in ./example)
- but, its ok to add anything else you need