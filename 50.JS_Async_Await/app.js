let employees= [
                {id : 1, name : 'John', age : 40},
                {id : 2, name : 'Rajan', age : 30},
              ];
            
//create Employee
let createEmployee = () => {
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            employees.push(employee);
            let isDone = true;
            if(isDone){
                resolve();
            }
            else{
                reject('Emp Creation is Failed');
            }
        },2000)
    });
};

//get Employee
let getEmployee = () => {
    setTimeout( () => {
        let employeeRows = '';
      employees.forEach((employee) => {
            employeeRows += `
                                <tr>
                                    <td>${employee.id}</td>
                                    <td>${employee.name}</td>
                                    <td>${employee.age}</td>
                                </tr>
                            `
        });
        document.querySelector('#table-body').innerHTML =employeeRows;
    },1000);
};

//async , await
let init = async() =>{
    let result = await createEmployee({id:3, name:'vislon', age:26});
    getEmployee();
};

init();