//-----Callback Function--------------
let sum = (a, b) => {
    return a+b;
};

let mul = (a, b) => {
    return a*b;
};

let calaculate = (a, b, callback) =>{
    let result='';
    return callback(a , b);
};

let output = calaculate(10,20,sum);
console.log(output);

output = calaculate(10,20,mul);
console.log(output);

output = calaculate(20,10,(a,b) => {
    return a - b;
});
console.log(output);

console.log('--------------------------Example--------------------')

let employees = [{id : 1, name : 'john' , age : 35},
                 {id : 2, name :'rajan' , age : 25}];

let createEmployee = (employee) => {
    
}
