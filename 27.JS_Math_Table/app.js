let numberBox=document.querySelector('#number');
numberBox.addEventListener('keyup',function(){
    let number=Number(numberBox.value);
    document.querySelector('#num-one').innerText=number;
    calculate();
});

let rangeSelector=document.querySelector('#range');
rangeSelector.addEventListener('input',function(){
    let multiplier=Number(rangeSelector.value);
    document.querySelector('#num-two').innerText=multiplier;
    calculate();
});


//calculation
let calculate = () =>{
    let number=Number(document.querySelector('#num-one').innerText);
    let multiplier=Number(document.querySelector('#num-two').innerText);
    let result = number * multiplier;
    document.querySelector('#num-three').innerText=result;
}


