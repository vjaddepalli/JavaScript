//--------------Functions-------------

//Function Without Parameter
function printNumbers1(){
        
    let result='';
    for(let i=1;i<=10;i++){
        result += `${i} `;
    }
    console.log(result)
}

printNumbers1();

//Function with parameter
function printNumbers2(startNumber,endNumber,increment){

    let result='';
    for(let i=startNumber;i<=endNumber;i +=increment){
        result += `${i} `;
    }
    console.log(result)
}

printNumbers2(10,500,5);

printNumbers1(); // Function Re-usability


//Function With Return Type
let printNumbers3=function(startNumber,endNumber,increment){
        let result='';
        for(let i=startNumber;i<=endNumber;i +=increment){
            result += `${i} `;
        }
        return result;
};

console.log(`${printNumbers3(2,20,2)}`)

let output=printNumbers3(2,20,2); //Function Re-usability
console.log(output);


//object as an function parameter
let printObj=function(obj){
    console.log(obj);
}

printObj({name: 'Rajan', age : 24});

let mobile = {
    brand : 'apple',
    price : 50000
}
printObj(mobile)


//Array as an function parameter
let printArray=function(arr){
   let result='';
   for(let index in arr){
       result += `Index : ${index} => Value : ${arr[index]} \n`
   }
   console.log(result);
}
printArray(['10','20','30']);

let colors = ['white','black','orange'];
printArray(colors);

//function inside an object
let student={
    fName : 'Vijay',
    lName: 'Addepalli',
    fullName : function(){
        return `${this.fName} ${this.lName}`;
    }
};
console.log(student);
console.log(student.fullName());

//Nested Function
let outerFn=function(){
    console.log("This is Outer Function");
    let innerFn=function(){
        console.log("This is Inner Function");
    }
    innerFn();
}
outerFn();

//twisted function
let twistedFn=function(){
    let name='john';
    let printStudent=function(){
        let student ={
            name : 'Rajan',
            age : 20,
            course : 'CSE'
        };
        return student;
    };
    return printStudent;
};

let innerFunction=twistedFn();
console.log(innerFunction());


//Making Chicken Curry with Functions

let glassBowl=function(rawChicken,masala){
    let marinatedChicken=`MIXING : (${rawChicken} + ${masala})`;
    return marinatedChicken;
}
let cookingBowl=function(marinatedChicken,water){
    let cookedChicken=`COOCKING : (${marinatedChicken} + ${water})`;
    return cookedChicken;
}
let eatingPlate=function(cookedChicken,rice){
    let eating=`EATING : (${coockedChicken} + ${rice})`;
    console.log(eating);
}

let rawChicken='2-KG Chicken';
let masala='Garlic, Pepper, Salt';
marinatedChicken=glassBowl(rawChicken,masala);
let water='1Ltr Water';
coockedChicken=cookingBowl(marinatedChicken,water);
let rice='Plate Rice';
eatingPlate(coockedChicken,rice);
