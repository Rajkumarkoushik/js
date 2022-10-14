// Selectors
var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-btn");
var todoList = document.querySelector(".todo-list");
var filterOption = document.querySelector(".filter-todo");

// Event listener
todoButton.addEventListener("click", function(e){
    


// Prevent form submiting

e.preventDefault();

// Todo Div
var todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
// Create Li
var newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);

// ADD todo to localstorage
saveLocalTodos(todoInput.value);

// Check mark button
var completedButton = document.createElement("button");
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

// Trash button
var trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

// Append to list
todoList.appendChild(todoDiv);

// Clear todo input value
todoInput.value ="";

});

todoList.addEventListener("click", function(e){
    var item = e.target

    // Delete todo
    if(item.classList[0] === "trash-btn"){
        var todo = item.parentElement;

        // Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }

    // Check mark

if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
}
});

filterOption.addEventListener("click", function(e){
    var todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
                case "completed":
                    if(todo.classList.contains("completed")){
                        todo.style.display = "flex";
                    } else{
                        todo.style.display = "none";
                    }
                    break;
                    case "uncompleted":
                        if(!todo.classList.contains("completed")){
                            todo.style.display = "flex";
                        }
                        else{
                            todo.style.display = "none";
                        }
                        break;
        }
    });
})

function saveLocalTodos(todo){

    // Check--- Hey do i already have thing in there?
    var todos;
    if(localStorage.getItem("todos") === null){
        todos =[];
    } else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
    
    // Check--- Hey do i already have thing in there?
    var todos;
    if(localStorage.getItem("todos") === null){
        todos =[];
    } else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
        
// Todo Div
var todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
// Create Li
var newTodo = document.createElement("li");
newTodo.innerText = todo;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);

// Check mark button
var completedButton = document.createElement("button");
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

// Trash button
var trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

// Append to list
todoList.appendChild(todoDiv);


    });
}






