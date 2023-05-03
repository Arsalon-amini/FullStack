const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "arsalon",
  password: "1234",
});

connection.connect(function (err) {
  console.log("Connected");
});
