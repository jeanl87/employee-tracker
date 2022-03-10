DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE department (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30),
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30), 
    salary DECIMAL,
    department_id INTEGER, 
    FOREIGN KEY (department),
    REFERENCES department(id),
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30), 
    last_name VARCHAR(30), 
    role_id INTEGER,
    FOREIGN KEY (role),
    REFERENCES role (id),
    manager_id INTEGER, 
    FOREIGN KEY (manager),
    REFERENCES manager(id),

); 

