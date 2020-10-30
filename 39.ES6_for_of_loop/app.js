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

//normal for-loop
let result ='';
for(let i=0;i<=employees.length-1;i++){
    let employee = employees[i];
    result += `${employee.name.toUpperCase()} `;
}
console.log(result);

//for-in loop ES5
result ='';
for(let index in employees){
    let employee = employees[index];
    result += `${employee.name.toUpperCase()} `;
}
console.log(result);

// for-of loop ES6
result ='';
for(let employee of employees){
    result += `${employee.name.toUpperCase()} `;
}
console.log(result);

