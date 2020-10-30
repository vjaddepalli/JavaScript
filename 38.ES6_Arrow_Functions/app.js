let employees=[
    {
        name : 'Vijay',
        age : 24,
        role : 'Software Engineer',
    },
    {
        name : 'mahesh',
        age : 26,
        role : 'Software Engineer',
    },
    {
        name : 'kalyan',
        age : 25,
        role : 'Software Engineer',
    },
    {
        name : 'srikatnh',
        age : 26,
        role : 'Software Engineer',
    }

]

let juniorEmployees = employees.filter(function(employee){
    return employee.age <=25;
});
console.log(juniorEmployees);

//using arrow function----------

let jrEmployees = employees.filter(employee =>  employee.age <=25);
console.log(jrEmployees);


//limitation of arow function
let student ={
    fname : 'arjun',
    lname : 'reddy',
    fullName : () => {
        return `${this.fname} + ${this.lname}`;
    }

};
console.log(student);
//this will not working

