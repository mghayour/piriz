![Piriz](/assets/logoV1.2.land.png)

Make webservice calls simple as function call

## What is this?
This project help you to get rid of microservices calls headache and make it simple just like a function call

## How can i use it ?
1. Install using npm
  - `npm i -g piriz`

### Server
1. start server using piriz command
  - `piriz start api.js`

### Client
1. connect to server
2. use your functions

### Example of use
api.js
```js
exports.hello = function() {
  return "Hello World, Im working"
}
```

client.js
```js
const piriz = require("piriz");
const myService = new piriz("localhost")

myService.hello().then((res) => {
  console.log("Hello result:", res)
})

```


For more examples, checkout examples folder

