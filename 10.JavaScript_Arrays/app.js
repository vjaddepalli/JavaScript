//----------Array Creation-----------
let numbers=[10,20,30,40,50]
console.log(numbers)

//access elements
console.log(numbers[3]) //40
console.log(numbers[5]) //undefined

//Iterations of Arrays
let colors=['white','red','black','green','blue']
console.log(colors)

//normal for-loop
let result='';
for(let i=0;i<=colors.length-1;i++){
    result += `${colors[i]} `
}
console.log(result)

//for-in loop upto ES5
result='';
for(let index in colors){
    result += `${colors[index]} `
}
console.log(result)

//for-of loop from ES6 
result='';
for(let color of colors){
    result += `${color} `
}
console.log(result)





//Array of Objects
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
console.log(employees)

//access objects
result='';
for(let employee of employees){
    result += `${employee.name} `
}
console.log(result)

//Filter the Junior employees : age<=25
jrEmployee=[];
for(let employee of employees){
    if(employee.age<=25)
    {
        jrEmployee.push(employee);
    }
}
console.log(jrEmployee)

//------------------------------------------------Array Functions-----------------------------------------
console.log('------------------------------Array Functyions---------------------------');

//shift(): => remove the first element from array
console.log('---------------------------Shift()------------------------');
let techList=['HTML','CSS','JavaScript','jQuery','Bootstrap'];
console.log(techList);
techList.shift();
console.log(techList);

//unshift(): => add the first element from array
console.log('---------------------------unshift()------------------------');
techList=['HTML','CSS','JavaScript','jQuery','Bootstrap'];
console.log(techList);
techList.unshift('New Tech');
console.log(techList);

//push(): => add the last element from array
console.log('--------------------------push()------------------------');
techList=['HTML','CSS','JavaScript','jQuery','Bootstrap'];
console.log(techList);
techList.push('New Tech');
console.log(techList);

//pop(): => remove the last element from array
console.log('--------------------------pop()------------------------');
techList=['HTML','CSS','JavaScript','jQuery','Bootstrap'];
console.log(techList);
techList.pop();
console.log(techList);

//sort(): => sort array an ascending order
console.log('--------------------------sort()------------------------');
techList=['HTML','CSS','JavaScript','jQuery','Bootstrap'];
console.log(techList);
techList.sort();
console.log(techList);

//reverse(): => reverse an array 
console.log('--------------------------reverse()------------------------');
techList=['HTML','CSS','JavaScript','jQuery','Bootstrap'];
console.log(techList);
techList.reverse();
console.log(techList);

//reverse and order
console.log('--------------------------reverse() & sort() for order------------------------');
techList=['HTML','CSS','JavaScript','jQuery','Bootstrap'];
console.log(techList);
techList.sort().reverse();
console.log(techList);

//splice(index) : => To Remove or Replace any position from array
console.log('--------------------------splice(index)------------------------');
techList=['HTML','CSS','JavaScript','jQuery','Bootstrap'];
console.log(techList);
techList.sort().splice(2);
console.log(techList);

//splice(index,no-of-elements) : => To Remove or Replace any position from array
console.log('--------------------------splice(index,no-of-elements)------------------------');
techList=['HTML','CSS','JavaScript','jQuery','Bootstrap'];
console.log(techList);
techList.sort().splice(2,1);
console.log(techList);

//splice(index,no-of-elements,replace-element) : => To Remove or Replace any position from array
console.log('--------------------------splice(index,no-of-elements,replace)------------------------');
techList=['HTML','CSS','JavaScript','jQuery','Bootstrap'];
console.log(techList);
techList.sort().splice(2,1,'node.JS');
console.log(techList);

//join() : => To join the array elements to string
console.log('--------------------------join()------------------------');
techList=['HTML','CSS','JavaScript','jQuery','Bootstrap'];
console.log(techList);
let newTech=techList.join(' - ');
console.log(newTech);

/*
//split() : => To split a string to an array
console.log('--------------------------split()------------------------');
console.log(techList);
let newList=techList.split(' - ');
console.log(newList);
*/

//filter()
console.log('--------------------------filter()------------------------');
jrEmployee=[];
for(let employee of employees){
    if(employee.age<=25)
    {
        jrEmployee.push(employee);
    }
}
console.log(jrEmployee)

//using filter() here---------
let jrEmp=employees.filter(function(employee){
    return employee.age <= 25;
})
console.log(jrEmp);
