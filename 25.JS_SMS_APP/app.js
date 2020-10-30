//--------------SMS APP-------------

let textBox=document.querySelector('#text-area');
let charCount=document.querySelector('#char-count');
textBox.addEventListener('keyup',function(){
    let textCount=textBox.value.length;
    charCount.innerText=textCount;
    if(textCount==100){
        alert("Maximum Charaters Limit Reached");
    }
})