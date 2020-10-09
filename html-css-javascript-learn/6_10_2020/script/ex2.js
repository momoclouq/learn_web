//to do app
document.addEventListener("DOMContentLoaded", function(){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!Array.isArray(tasks)) tasks = [];

    //display the task if there is one
        for (let task of tasks){
            document.body.appendChild(createTask(task));
        }


    let currentTask = document.getElementById("what");

    let addTaskButton = document.getElementById("submit"); 
    addTaskButton.addEventListener("click", function(){
        let taskString = currentTask.value;
        console.log(taskString);

        if (taskString !== "") {
            let task = createTask(taskString);
            document.body.appendChild(task);
            tasks.push(taskString);

            task.addEventListener("click", function changeCondition(){
                if (task.style.textDecoration === "line-through") task.style.textDecoration = "";
                else {
                    task.style.textDecoration = "line-through";
                }
            });

            currentTask.value = '';
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    });

    let clearBut = document.getElementById("clear");
    clearBut.addEventListener("click", function(){
        localStorage.clear();
    })
});

function createTask(task, listTask){
    let taskItem = document.createElement("div");
    taskItem.innerText = "+ " + String(task);
    taskItem.style.backgroundColor = "purple";
    taskItem.style.color = "white";
    taskItem.style.margin = "3px";

    let removeBut = document.createElement("button");
    removeBut.innerText = "rm";
    removeBut.style.float = "right";
    taskItem.appendChild(removeBut);

    removeBut.addEventListener('click', function(){
        document.body.removeChild(taskItem);
    });

    return taskItem;
}

/*
// PART 3

window.onload = function(){
    var todoForm = document.getElementById("newTodoForm");
    var todoList = document.getElementById("todoList");

    todoForm.addEventListener("submit", function(event){
        event.preventDefault();

        var removeButton = document.createElement("button");
        removeButton.innerText = "X";

        var newTodo = document.createElement("li");
        newTodo.innerText = document.getElementById("task").value;

        todoList.appendChild(newTodo);
        newTodo.appendChild(removeButton);

        todoForm.reset();
    })

    todoList.addEventListener("click", function(event){
        if (event.target.tagName.toLowerCase() === 'li') {
            event.target.style.textDecoration = "line-through";
        }
        else if (event.target.tagName.toLowerCase() === 'button') {
            event.target.parentNode.remove();
        }
    })

}

// PART 4 With LocalStorage

window.onload = function(){
    var todoForm = document.getElementById("newTodoForm");
    var todoList = document.getElementById("todoList");

    // retrieve from localStorage
    var savedTodos = JSON.parse(localStorage.getItem("todos")) || []
    for(var i=0; i < savedTodos.length; i++){
        var newTodo = document.createElement("li");
        newTodo.innerText = savedTodos[i].task
        newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
        if(newTodo.isCompleted) {
            newTodo.style.textDecoration = "line-through";
        }
        todoList.appendChild(newTodo);
    }

    todoForm.addEventListener("submit", function(event){
        event.preventDefault();
        var newTodo = document.createElement("li");
        var taskValue = document.getElementById("task").value;
        newTodo.innerText = taskValue;
        newTodo.isCompleted = false;
        todoForm.reset();
        todoList.appendChild(newTodo);

        // save to localStorage
        savedTodos.push({task: newTodo.innerText, isCompleted: false});
        localStorage.setItem("todos", JSON.stringify(savedTodos));
    })

    todoList.addEventListener("click", function(event){
        var clickedListItem = event.target;

        if(!clickedListItem.isCompleted) {
            clickedListItem.style.textDecoration = "line-through";
            clickedListItem.isCompleted = true;
        } else {
            clickedListItem.style.textDecoration = "none";
            clickedListItem.isCompleted = false;
        }

        // breaks for duplicates - another option is to have dynamic IDs
        for(var i=0; i < savedTodos.length; i++){
            if(savedTodos[i].task === clickedListItem.innerText){
                savedTodos[i].isCompleted = clickedListItem.isCompleted;
                localStorage.setItem("todos", JSON.stringify(savedTodos));
            }
        }
    });
}
*/
