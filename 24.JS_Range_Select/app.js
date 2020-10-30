//----------Change Password---------------

//number format for currency
let formatNumber=(number)=>{
    let result=new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
    return result;
};


let amountRange=document.querySelector('#range');
let amountDisplay=document.querySelector('#amount');
amountRange.addEventListener('input',function(){
    let selectedAmount=amountRange.value;
    amountDisplay.innerText=formatNumber(selectedAmount);
    
})