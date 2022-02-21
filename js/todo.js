const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = []

function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    span.innerText = newTodo;
    
    toDoList.appendChild(li);
}

function handleToDoSumbit(e) {
    e.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";

    paintToDo(newTodo);
    toDos.push(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSumbit);
