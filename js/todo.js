const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const savedToDos = localStorage.getItem(TODOS_KEY);
let toDos = [];

function saveTodos() {
    localStorage.setItem( TODOS_KEY, JSON.stringify(toDos) );
}

function deleteToDo(e) {
    const li = e.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();

    saveTodos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    span.innerText = newTodo.text;
    
    toDoList.appendChild(li);
}

function handleToDoSumbit(e) {
    e.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    paintToDo(newTodoObj);
    toDos.push(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSumbit);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}