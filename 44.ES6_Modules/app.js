import {Employee} from "./employee/Employee.js";
import {Customer} from "./customer/Customer.js";

let employee = new Employee('John','Doe',40,'Engineer');
employee.greet();

let customer = new Customer('MS','Dhoni',35,'India');
customer.greet();