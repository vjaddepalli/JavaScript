class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    greet(){
        let msg=`Welcome Mr.${this.getFirstName()} ${this.getLastName()}`;
        console.log(msg);
    }
    
}
let person = new Person('A.','Vijay');
person.greet();

class Employee extends Person{
    constructor(firstName,lastName,age,jobrole){
        super(firstName,lastName);
        this.age = age;
        this.jobrole = jobrole;
    }
    getAge(){
        return this.age;
    }
    getJobRole(){
        return this.jobrole;
    }
    greet(){
        let msg=`
                Hello Mr.${this.getFirstName()} ${this.getLastName()}
                AGE : ${this.getAge()} 
                Job_Role : ${this.getJobRole()}`;
        console.log(msg);
    }
}

let employee = new Employee('A.','Vijay',25,'Software Engineer');
employee.greet();

class Customer extends Person{
    constructor(firstName,lastName,age,location){
        super(firstName,lastName);
        this.age=age;
        this.location=location;
    }
    getAge(){
        return this.age;
    }
    getLocation(){
        return this.location;
    }
    greet(){
        let msg=`
                Hello Mr.${this.getFirstName()} ${this.getLastName()}
                AGE : ${this.getAge()} 
                Location : ${this.getLocation()}`;
        console.log(msg);
    }
}
let customer = new Customer('Vijay','Surya',25,'Hyderabad');
customer.greet();