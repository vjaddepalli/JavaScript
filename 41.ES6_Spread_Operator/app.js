//Spread Operator
let numbers = [10,58,95,68,15,26,47,658,6985,789,9865];
let min=Math.min(...numbers);
console.log(min);

let array1=['white','green','yellow'];
let array2=['red','blue','black'];

let colors =[...array1, ...array2];
console.log(colors);