const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "react_auth",
});

db.connect((err) => {
  if (err) {
    console.log("DB Connection Failed");
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;