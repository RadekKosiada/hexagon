const express = require("express");
const app = express();
const port = 3001;

app.get("/", function(request, response) {
  response.send("Express is working");
})

app.listen(port, () => {
  console.log(`Express server is running on ${port}`);
});