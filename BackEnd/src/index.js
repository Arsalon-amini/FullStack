const config = require("config");

const express = require("express");


const app = express();

console.log(config.get("name"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => console.log("listening on port 3000"));
