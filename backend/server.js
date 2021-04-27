const express = require("express");
const app = express();
const port = 3001;

app.get("/data", function(request, response) {
  const data = [{ id: 0}]
  response.json(data);
})

app.listen(port, () => {
  console.log(`Express server is running on ${port}`);
});