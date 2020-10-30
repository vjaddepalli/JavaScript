/*
------JS Data Types------
    1.Number : 0-9
    2.String : 'text' , "text" . `text`
    3.Boolean: true / false
    4.undefined
    5.null
*/

//String
let name='vijay'
console.log(`Value is: ${name} | DataType is: ${typeof(name)}`)

//Number
let num=10
console.log(`Value is: ${num} | DataType is: ${typeof(num)}`)

//Boolean
let val=true
console.log(`Value is: ${val} | DataType is: ${typeof(val)}`)

//undefined
let noval
console.log(`Value is: ${noval} | DataType is: ${typeof(noval)}`)

//null
let dummy=null
console.log(`Value is: ${dummy} | DataType is: ${typeof(dummy)}`)

//Re-assigning any type of value to variable
let abc;
abc=123;
abc='any value';
console.log(`Value is: ${abc} | DataType is: ${typeof(abc)}`)