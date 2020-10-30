let greet=function(name,age=18){
    let msg=`Hi I am ${name}, ${age} years old`;
    console.log(msg);
}
greet('vijay',24);

let calculate=function(start,end=10){
    let result ='';
    for(let i=start;i<=end;i++){
        result += `${i} \n`;
    }
    console.log(result);
};
calculate(5);