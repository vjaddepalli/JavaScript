/*
    -----------Conditional & Looping Statements--------
    1.If-Else
    2.Switch
    3.For-Loop
    4.While-Loop
    5.Do-While-Loop
*/

//-----------IF-Else----------
let time=2;
let greetings=' ';
if(time>=0 && time<=12){
    console.log(`Good Morning, Time is ${time} AM`)
}
else if(time>=12 && time<=17){
    console.log(`Good Afternoon, Time is ${time} PM`)
}
else if(time>=17 && time<=23){
    console.log(`Good Evening, Time is ${time} PM`)
}
else if(time===24){
    console.log(`Good Night, Time is ${time} PM`)
}
else{
    console.log(`Invalid Time, Please Enter Proper Time`)
}



//------Switch-------
let day=new Date().getDay();
let today=' ';

switch(day){
    case 0:
        today='Sunday';
        break;
    case 1:
        today='Monday';
        break;
    case 2:
        today='Tuesday';
        break;
    case 3:
        today='Wednesday';
        break;
    case 4:
        today='Thursday';
        break;
    case 5:
        today='Friday';
        break;
    case 6:
        today='Saturday';
        break;
    default:
        today='Enter a Proper Value'
        break;
    
}

console.log(`Today is: ${today}`)