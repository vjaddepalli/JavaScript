//1.find the number of 'o' in the given string

let msg='Good Morning';
let findZeros = (str) => {
    let count = 0;
    for(let i=0;i<=str.length-1;i++){
        let char =str.charAt(i);
        if(char === 'o' || char === 'O'){
            count++;
        }
    }
    return count;
};
console.log(`Number of Zeros in given string : ${findZeros(msg)}`);

//2.Find the reverse string of the given string
msg='good morning';
let reverseString=(str)=>{
    let tempString = '';
    for(let i=str.length-1;i>=0;i--){
        let char =str.charAt(i);
        tempString += char;
    }
    return tempString;
};
console.log(`${msg} => ${reverseString(msg)}`);

//3. check the given string is palindrome or not
msg='ABA';
let isPalindrome=(str)=>{
    return (str === reverseString(str));
};
console.log(`${msg} is palindrome ? ${isPalindrome(msg)} `);