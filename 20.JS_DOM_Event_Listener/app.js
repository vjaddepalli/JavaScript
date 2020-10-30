let printMessage=(message)=>{
    let h1Tag=document.querySelector('#msg');
    h1Tag.innerText = message;
}

let gmButton = document.querySelector('#gm-btn');
gmButton.addEventListener('click',function(){
    printMessage('Good Morning');
})

let gaButton = document.querySelector('#ga-btn');
gaButton.addEventListener('click',function(){
    printMessage('Good Afternoon');
})

let geButton = document.querySelector('#ge-btn');
geButton.addEventListener('click',function(){
    printMessage('Good Evening');
})

let gnButton = document.querySelector('#gn-btn');
gnButton.addEventListener('click',function(){
    printMessage('Good Night');
})