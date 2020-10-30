//-----------JS DOM Basics------------
//html
console.log(document);

//head
console.log(document.head);

//title
console.log(document.title);

//body
console.log(document.body);

//nav
let navTag=document.querySelector('nav');
console.log(navTag);
console.log(navTag.innerText);

//anchor('a')
let anchorTag=document.querySelector('nav a');
console.log(anchorTag);
console.log(anchorTag.innerText);

//change the inner text
anchorTag.innerText='Vijay A';

//h1 tag
let h1Tag=document.querySelector('#msg');
h1Tag.innerText='Good Evening';

//styles
h1Tag.style.backgroundColor='limegreen';
h1Tag.style.color='white';
h1Tag.style.textAlign='center';
h1Tag.style.padding='15px';
h1Tag.style.boxShadow="10px 0px 10px black";