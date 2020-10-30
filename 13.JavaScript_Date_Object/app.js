//-------------------Date Object---------------------

//Date
let date=new Date();
console.log(date);

//Current-Date
let Current_Date=new Date().toLocaleDateString();
console.log(Current_Date);

//Current-Time
let Current_Time=new Date().toLocaleTimeString();
console.log(Current_Time);

//USA Date
let options={timeZone : 'America/New_York'};
let us_date=new Date().toLocaleDateString('en-US',options);
console.log(us_date);

//USA Time
options={timeZone : 'America/New_York'};
let us_time=new Date().toLocaleTimeString('en-US',options);
console.log(us_time);

//To-Day
let day=new Date().getDay();
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

//Custom Date
let c_day=new Date().getDay();
let c_month=new Date().getMonth();
let c_year=new Date().getFullYear();

console.log(`Date is : ${c_day}-${c_month}-${c_year}`);