// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


// Event listeners
document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodos);

// Functions
function addTodo(event) {
    event.preventDefault();
    //Create DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Add to local storage
    saveLocalTodoes(todoInput.value);
    //Create check mark button
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("complete-btn");
    todoDiv.appendChild(completedBtn);
    //Create trash button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");
    todoDiv.appendChild(trashBtn);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear Todo Input value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    const todo = item.parentElement;
    //Detete todo
    if (item.classList[0] === 'trash-btn') {
    //Animation    
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
    }
    //Check mark
    if (item.classList[0] === 'complete-btn') {
        todo.classList.toggle("completed");
    }
}

function filterTodos(e) {
    const todos = todoList.childNodes;
    console.log(e.target.value);
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}

function saveLocalTodoes(todo) {
    //Check
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
      //Check
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) {
        //Create DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
        //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
       //Create check mark button
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("complete-btn");
    todoDiv.appendChild(completedBtn);
       //Create trash button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");
    todoDiv.appendChild(trashBtn);
      //Append to list
    todoList.appendChild(todoDiv);
    })
}
 
function removeLocalTodos(todo) {
    //Check
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoText = todo.childNodes[0].innerText;
    todos.splice(todos.indexOf(todoText), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}