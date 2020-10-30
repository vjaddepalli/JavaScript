//-----------------------------------------While Loop------------------------
/*
    intialization;
    while(condition){
        //statements
        // Inc+ or Dec- (always last lastline)
    }
*/


//Print 0-10 numbers with diff 1
let result ='';
let i=0;
while(i<=10){
    if(i<=9){
        result += `${i}, `;
    }
    else{
        result += `${i}`;
    }
    i++;
}
console.log(result);


//print 20-0 numbers with diff 2
result='';
i=20;
while(i>=0){
    if(i>0){
        result += `${i}, `;
    }
    else{
        result += `${i}`;
    }
    i -= 2;
}
console.log(result);


/*
    *
    * *
    * * *
    * * * *
    * * * * *
*/
result='';
i=1;
while(i<=5){
    let j=1;
    while(j<=i){
        result += `* `;
        j++;
    }
    result += "\n";
    i++
}
console.log(result)




/*
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
*/
result='';
i=1;
while(i<=5){
    j=1;
    while(j<=i){
        result += `${j} `;
        j++;
    }
    result += "\n";
    i++
}
console.log(result)


/*
    1
    2 2
    3 3 3
    4 4 4 4
    5 5 5 5 5
*/
result='';
i=1;
while(i<=5){
    j=1;
    while(j<=i){
        result += `${i} `;
        j++;
    }
    result += "\n";
    i++
}
console.log(result)

/*
    1 2 3 4 5
    1 2 3 4
    1 2 3 
    1 2
    1
*/
result='';
i=5;
while(i>=1){
    j=1;
    while(j<=i){
        result += `${j} `;
        j++;
    }
    result += "\n";
    i--;
}
console.log(result)


/*
    5 5 5 5 5
    4 4 4 4
    3 3 3
    2 2 
    1
*/
result='';
i=5;
while(i>=1){
    j=1;
    while(j<=i){
        result += `${i} `;
        j++;
    }
    result += "\n";
    i--;
}
console.log(result)