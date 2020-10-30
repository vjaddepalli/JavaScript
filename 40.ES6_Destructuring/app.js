// De-structuring ES6
let student = {
    name : 'Arjun Reddy',
    age : 23,
    course :'MBBS',
    address : {
        street : 'Hiitech City',
        city : 'Hyderabad',
        state:'TS'
    },
    hobbies : {
        regular :{
            id : 1,
            regHobbies : ['Reading Books', 'Playing Cricket']
        },
        occasional :{
            id : 1,
            occHobbies : ['Playing Cards','Online Games']
        }
    }

};

//Destructuing
let {street , city , state} = student.address;
console.log(`Street : ${street}
             City : ${city}
             State : ${state} `);
            
//regular Hobbies
let {regHobbies} =student.hobbies.regular;
console.log(regHobbies);