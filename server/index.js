const server = require("./app.js");

var PORT = process.env.PORT || 8080;

server.listen(PORT, function() {
  console.log(`server is listening on http://localhost:${PORT}`)
})