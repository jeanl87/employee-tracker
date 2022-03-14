const db = require("./db");
const inquirer = require("inquirer");
const table = require("console.table");
const { end } = require("./db/connection");

function promptMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to view?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add a Department",
          "Add a Role",
          "Add an Employee",
          "Update an Employee Role",
          "Update employee managers",
          "View employees by manager",
          "View employees by department",
          "Delete department",
          "Delete role",
          "Delete employee",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.menu) {
        case "View All Departments":
          promptDepartments();
          break;
        case "View All Roles":
          promptRoles();
          break;
        case "View All Employees":
          promptEmployees();
          break;
        case "Add Department":
          promptAddDepartment();
          break;
        case "Add Role":
          promptAddRole();
          break;
        case "Add Employee":
          promptAddEmployee();
          break;
        case "Update Employee Role":
          promptUpdateEmployeeRole();
          break;
        case "Update Employee Manager":
          promptUpdateEmployeeManager();
          break;
        case "View Employee by Manager":
          viewEmployeebyManager();
          break;
        case "View Employee by Department":
          viewEmployeebyDepartment();
          break;
        case "Delete Employee":
          deleteEmployee();
          break;
        case "Delete Role":
          deleteRole();
          break;
        case "Delete Department":
          deleteDepartmet();
          break;
        case "Exit":
          break;
        default:
          exit();
      }
    });
}
