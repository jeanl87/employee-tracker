INSERT INTO department (name)
VALUES
(Sales);
(Engineering);
(Finance);
(Legal);

INSERT INTO role (title, salary, department_id)
VALUES
(Sales Lead, 100000, Sales);
(Salesperson, 80000, Sales);
(Lead Engineer, 150000, Engineering);
(Software Engineer, 120000, Engineering);
(Account Manager, 160000, Finance); 
(Legal Team Lead, 250000, Legal);
(Lawyer, 190000, Legal);  

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', ,null);
('Mike', 'Chan', ,'John Doe'); 
('Ashley', 'Rodriguez', , null);
('Kevin', 'Tupik', , 'Ashley Rodriguez'); 
('Kunal', 'Singh', , null); 
('Malia', 'Brown', , 'Kunal Singh');
('Sarah', 'Lourd', , null);
('Tom', 'Allen', , 'Sarah Lourd'); 
