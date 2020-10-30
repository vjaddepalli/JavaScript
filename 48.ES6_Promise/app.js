//--------------Promise Concept----------------------
let doTask =(success,failure) => {
    let isDone =true;
    if(isDone){
        success('Task Done');
    }
    else{
        failure('Task NOT Done');
    }
};
doTask((message) => {
    console.log(message);
}, (message) => {
    console.log(message);
});

//Actual Promise Creation 

let cleanCamera = new Promise((resolve,reject) => {
    let isDone = true;
    if(isDone){
        resolve('cleaning is Done');
    }
    else{
        reject('cleaning is not done');
    }
});
cleanCamera.then( (message) => {
    console.log(message);
}).catch((err) =>{
    console.log(err);
})


//--------------Dependent promise--------------

let buildProject =new Promise((resolve,reject) => {
   setTimeout( () => {
    let isDOne = true;
    if(isDOne){
        resolve('Project is Finished');
    }
    else{
        reject('Project is Not Fininshed');
    }
   },1000);
});

let technicalRound =new Promise((resolve,reject) => {
    setTimeout( () => {
        let isDOne = true;
        if(isDOne){
            resolve('Technical Round is Finished');
        }
        else{
            reject('Technical Round is Not Fininshed');
        }
        },2000);
});

let managerRound =new Promise((resolve,reject) => {
    setTimeout( () => {
        let isDOne = true;
        if(isDOne){
            resolve('Manager Round is Finished');
        }
        else{
            reject('Manager Round is Not Fininshed');
        }
        },3000)
});

let hrRound =new Promise((resolve,reject) => {
    setTimeout( () => {
        let isDOne = true;
        if(isDOne){
            resolve('HR Round is Finished');
        }
        else{
            reject('HR Round is Not Fininshed');
        }
    },4000)
});

buildProject.then( (message) => {
    let result= `${message} ->`;
    console.log(message);
    technicalRound.then((message) => {
        result += `${message} ->`;
        console.log(message);
        managerRound.then( (message) => {
            result += `${message} ->`;
            console.log(message);
            hrRound.then( (message) => {
                result += `${message} ->`;
                console.log(message);
            }).catch( (err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    }).catch( (err) => {
        console.log(err);
    });
}).catch( (err) => {
    console.log(err);
});

