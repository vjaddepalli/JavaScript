//---------JSON Object-------------
/*
    String => Object : parse()
    Object => String : stringfy()
*/

let student={
    name :'rajan',
    age:20,
    course:'CSE',
    college:'IIT BOMBAY'
};
console.log(student);

//Object to String
let student_one=JSON.stringify(student);
console.log(student_one);

//String to Object
let student_two=JSON.parse(student_one);
console.log(student_two);