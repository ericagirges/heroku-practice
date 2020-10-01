const server = require("./api/server");

// make the port dynamic
const port = process.env.PORT || 2828;
server.listen(port, () => console.log("Server running..."))

// add a start script to package.json -> "start": "node index.js"
// heroku will run npm start to execut server 