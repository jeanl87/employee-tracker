const mysql = require("mysql2");

const dbConnection = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "",
    database: "employees",
  },
  console.log(`Connected to the employees database.`)
);

module.exports = dbConnection;
