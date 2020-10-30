//---Task List App-----
let taskForm=document.querySelector('#task-form');
taskForm.addEventListener('submit',function(event){

    let taskInput=document.querySelector('#input-item');

    let task=taskInput.value.trim();

    //get tasks from local storage
    let taskList =localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    taskList.unshift(task);

    //set to local storage
    localStorage.setItem('tasks',JSON.stringify(taskList));

    displayTasks();

    window.reload();
});

//display task list
let displayTasks = () =>{
    let taskListElement=document.querySelector('#task-list');
    let taskList =localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    if(taskList.length !== 0){
        let eachTask='';
        for(let task of taskList){
            eachTask += `
                            <li class="list-group-item list-grou-item-action list-group-item-warning">
                                <span class="font-weight-bold">${task}</span>
                                <button class="close">
                                    <i class="fa fa-times-circle"></i>
                                </button>
                            </li>
                        `;
        }
        taskListElement.innerHTML =eachTask;
    }
};
displayTasks();

//remove tasks
let taskList = document.querySelector('#task-list');
taskList.addEventListener('click',function(event){
    let targetElement = event.target;
    if(targetElement.classList.contains('fa-times-circle')){
        let actualEl = targetElement.parentElement.parentElement;
        let selectedTask = actualEl.innerText;
        
        //get task from local storage
        let taskList =localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        taskList = taskList.filter(function(task){
            return task.trim() !==  selectedTask.trim();
        });
        localStorage.setItem('tasks',JSON.stringify(taskList));
        displayTasks();
        
    }
    
})