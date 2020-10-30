/*
    JavaScript Operators
    --------------------
    1. Assignment Operators : =
    2. Arithmetic Operators : + - / * %
    3. Short hand Math Operators : += , -= , /= , *=
    4. Conditional Opearators : < , > , <= , >= , !==
    5. Unary Operators : ++ , --
    6. Logical Operators : || , && , ^
    7. Ternary operators : ?:
    8. Equality Operators : == , ===
*/

//Assignment Operators : =
console.log(`-------Assignment Operators-------`)
let num=10;
console.log(`a = ${num}`)

//Arithmetic Operators : + - / * %
console.log(`-------Arithmetic Operators-------`)
let num1=10
let num2=20
console.log(`Sum is: ${num1+num2}`)
console.log(`Sub is: ${num1-num2}`)
console.log(`Mul is: ${num1*num2}`)
console.log(`div is: ${num1/num2}`)
console.log(`Rem is: ${num2%num1}`)

//Short hand Math Operators : += , -= , /= , *=
console.log(`-------Short Hand Operators-------`)
let a=10
a += 10
console.log(`a += 10 => ${a}`)

a -= 1
console.log(`a -= 1 => ${a}`)

a *= 2
console.log(`a *= 2 => ${a}`)

a /= 2
console.log(`a += 2 => ${a}`)


// Conditional Opearators : < , > , <= , >= , !==
console.log(`-------Conditional Operators-------`)
let no=5
if(no<10){
    console.log(`${no} is smaller than 10`)
}
else{
    console.log(`${no} is bigger than 10`)
}

if(no>=1){
    console.log(`${no} is bigger than 1`)
}
else{
    console.log(`${no} is smaller than 1`)
}

//Unary Operators : ++ , --
console.log(`------------Unary Operator----------------`)
let val=10
console.log(`val=${val}`)
val++
console.log(`val++ => ${val}`)

val--
console.log(`val-- => ${val}`)

//Logical Operators : || , && , ^
/*
    AND -> T && T => T

    OR  -> F || F => F 

    XOR -> T ^ F , F ^ T => T
*/
console.log(`----------Logical Opearators---------`)
let inRelation=true
let parentsDecision=true
if(inRelation && parentsDecision){
    console.log("Marry Soon")
}
else{
    console.log("Wait For Final Decision")
}


//Ternary operators : ?:
/*
    Syntax : (condtion) ? true : false;
*/
console.log(`----------Ternary Opearators---------`)
let marks=35;
let result=' ';
(marks<=35) ? result='You are Failed in Exam' : result='You are Passed in Exam';
console.log(`The Result is : ${result}`)


//Equality Operators : == ===
console.log(`------Equality Operators--------`)
 
let ram=18;
 let sri=18;
 if(ram==sri){
     console.log(`Both are Same age group`);
 }
 else{
     console.log('Both are different age group')
 }

let hari=16;
let siri='16';
if(hari===siri){
    console.log(`Both are Same age group`);
}
else{
    console.log('Both are different age group')
}