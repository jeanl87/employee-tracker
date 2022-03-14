const dbConnection = require("./connection");

class db {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  getAllEmployees() {
    return this.dbConnection.promise().query("SELECT * FROM employees");
  }

  getAllDepartments() {
    return this.dbConnection.promise().query("SELECT * FROM depatment");
  }

  getAllRoles() {
    return this.dbConnection.promise().query("SELECT * FROM role");
  }

  getAllManagers() {
    return this.dbConnection.promise().query("SELECT * FROM manager");
  }

  getAllSalaries() {
    return this.dbConnection.promise().query("SELECT * FROM salary");
  }

  getNewEmployee() {
    return this.dbConnection.promise().query("CREATE new employee");
  }
}

module.exports = new db(dbConnection);
