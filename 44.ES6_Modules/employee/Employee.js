import {Person} from '../person/Person.js';
export class Employee extends Person{
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