const express = require("express");
const app = express();

app.get("/", function(request, response) {
  response.send("Express is working");
})

app.listen(3001, () => {
  console.log("Express server is running");
});