const dbConnection = require("./connection");

class db {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  findAllEmployees() {
    return this.dbConnection.promise().query("SELECT * FROM employees");
  }

  findallroles;

  findalldepartments;

  findallmanagers;

  findallsalary;

  createnewemployee;
}

module.exports = new db(dbConnection);
