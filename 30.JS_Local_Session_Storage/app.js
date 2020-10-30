//---------Storage------------

/*
----------Local Storage-----------
-> setItem('key','value') //create & update
-> getItem('key') //read
-> removeItem('key') //delete
-> clear();
----------Session Storage-----------
-> setItem('key','value') //create & update
-> getItem('key') //read
-> removeItem('key') //delete
-> clear();
*/

//Local Storage for Simple String
let empName='John';

//set
localStorage.setItem('name',empName);

//get
console.log(localStorage.getItem('name'));

//remove
localStorage.removeItem('name');

//clear
localStorage.clear();

//Local Storage with Array

let colors = [
                {id :1, name :'white'},
                {id :2, name :'red'},
                {id :3, name :'blue'},
                {id :4, name :'green'}
             ];

localStorage.setItem('colors',JSON.stringify(colors));

let theColors = JSON.parse(localStorage.getItem('colors'));
console.log(theColors);

localStorage.removeItem('colors');
//localStorage.clear();



//---------------------Session Storage----------------------
let studentName = 'Rajan';

sessionStorage.setItem('name',studentName);

console.log(sessionStorage.getItem('name'));

//remove
sessionStorage.removeItem('name');
sessionStorage.clear();

//Session Storage with Array

colors = [
                {id :1, name :'white'},
                {id :2, name :'red'},
                {id :3, name :'blue'},
                {id :4, name :'green'}
             ];

sessionStorage.setItem('colors',JSON.stringify(colors));

theColors = JSON.parse(sessionStorage.getItem('colors'));
console.log(theColors);

sessionStorage.removeItem('colors');
