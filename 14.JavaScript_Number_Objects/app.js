//-------------Number Objects-----------

//max-number
console.log(Number.MAX_SAFE_INTEGER);

//min-number
console.log(Number.MIN_SAFE_INTEGER);

//Pos Infinity
console.log(Number.POSITIVE_INFINITY);

//Neg Infinity
console.log(Number.NEGATIVE_INFINITY);

//parseInt
let str1='100';
let num1=Number.parseInt(str1);
console.log(`${typeof str1} => ${typeof num1}`)

//parseFloat
let str2='100';
let num2=Number.parseFloat(str2);
console.log(`${typeof str2} => ${typeof num2}`)

//toString
let num3=100;
let str3=Number.toString(num3);
console.log(`${typeof num3} => ${typeof str3}`)

//toFixed
let amount=520;
console.log(amount.toFixed(2)); //price format
