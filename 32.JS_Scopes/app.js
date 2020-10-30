//JS Block scope
let a=10;
{
    let a=20;
    {
        let a=30;
        let b=50;
        {
            let a=40;
            console.log(a);
            console.log(b);
        }
    }
}
console.log(a);
console.log('----------------');

let course='engineering';
if(course==='engineering'){
    let dept='cse';
    console.log(dept);
}
//console.log(dept) //error because outside of the block


//function scope
console.log('--------------------------');

let greet =function(){
    let msg='good morning';
    console.log(msg);
};
greet();
//console.log(msg) this is error