const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/api/v1/books", (req, res) => {
  res.send("working");
});

app.listen(port, () => {
  console.log("listening on port", port);
});
