//-----------Digital Watch------------

//Indian Watch
let indiaWatch=()=>{
    let options={timezone:'Asia/Kolkata'};
    let currentDate=new Date().toLocaleDateString('en-US',options);
    let currentTime=new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#india-date').innerText=currentDate;
    document.querySelector('#india-time').innerText=currentTime;
};
setInterval(indiaWatch,1000);


//USA Watch
let usaWatch=()=>{
    options={timeZone: "America/New_York"};
    let currentDate=new Date().toLocaleDateString('en-US',options);
    let currentTime=new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#usa-date').innerText=currentDate;
    document.querySelector('#usa-time').innerText=currentTime;
};
setInterval(usaWatch,1000);


//China Watch
let chinaWatch=()=>{
    options={timeZone:"Asia/Shanghai"};
    let currentDate=new Date().toLocaleDateString('en-US',options);
    let currentTime=new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#china-date').innerText=currentDate;
    document.querySelector('#china-time').innerText=currentTime;
};
setInterval(chinaWatch,1000);
