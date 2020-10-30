//---------Form Validation-------------
let registrationForm=document.querySelector('#register-form');

registrationForm.addEventListener('submit',function(event){

    event.preventDefault(); //stops auto form submission
    if(validateForm()){
        alert('Form is Submitted Succefully');
    }
});

let validateForm = () =>{
    return (checkUserName() & checkEmail() & checkPassword1() & checkPassword2());
       
};

let checkUserName = () =>{
    let inputElement=document.querySelector('#name');
    let inputMessage=document.querySelector('#name-msg');
    let regExp = /^[a-zA-Z]{4,20}$/;
    if(regExp.test(inputElement.value)){
        makeValid(inputElement,inputMessage);
        return true;
    }
    else{
        makeInValid(inputElement,inputMessage);
        return false;
    }
}

let checkEmail = () =>{
    let inputElement=document.querySelector('#Email1');
    let inputMessage=document.querySelector('#email-msg');
    let regExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(regExp.test(inputElement.value)){
        makeValid(inputElement,inputMessage);
        return true;
    }
    else{
        makeInValid(inputElement,inputMessage);
        return false;
    }
}

let checkPassword1 = () =>{
    let inputElement=document.querySelector('#Password1');
    let inputMessage=document.querySelector('#pwd1-msg');
    let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(regExp.test(inputElement.value)){
        makeValid(inputElement,inputMessage);
        return true;
    }
    else{
        makeInValid(inputElement,inputMessage);
        return false;
    }
}

let checkPassword2 = () =>{
    let inputElement=document.querySelector('#Password2');
    let inputPassword=document.querySelector('#Password1');
    let inputMessage=document.querySelector('#pwd2-msg');
    let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(regExp.test(inputElement.value) && inputElement.value === inputPassword.value){
        makeValid(inputElement,inputMessage);
        return true;
    }
    else{
        makeInValid(inputElement,inputMessage);
        return false;
    }
}

//makeValid()

let makeValid =(inputElement,inputMessage)=>{
    inputElement.classList.add('is-form-valid');
    inputElement.classList.remove('is-form-inValid');

    inputMessage.classList.add('text-success');
    inputMessage.classList.remove('text-failed');

    inputMessage.innerText='Looks Good';
}

let makeInValid =(inputElement,inputMessage)=>{
    inputElement.classList.remove('is-form-valid');
    inputElement.classList.add('is-form-inValid');

    inputMessage.classList.remove('text-success');
    inputMessage.classList.add('text-failed');

    inputMessage.innerText='Require Valid Details'
}

//name field with keyup
let nameElement=document.querySelector('#name');
nameElement.addEventListener('keyup',function(){
    checkUserName();
})

//mail with keyup
let mailElement=document.querySelector('#Email1');
mailElement.addEventListener('keyup',function(){
    checkEmail();
})

//password with keyup
let pwd1=document.querySelector('#Password1');
pwd1.addEventListener('keyup',function(){
    checkPassword1();
})

//confirm password with keyup
let pwd2=document.querySelector('#Password2');
pwd2.addEventListener('keyup',function(){
    checkPassword2();
})