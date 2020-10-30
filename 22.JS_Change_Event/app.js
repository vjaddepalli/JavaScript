//--------Change event---------

let selectBox=document.querySelector('#select-box');
selectBox.addEventListener('change',function(){
    let selectedData=selectBox.value;
    let printData=document.querySelector('#msg');
    printData.innerText=selectedData;
})