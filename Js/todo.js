const todoForm = document.querySelector(".todo_Form");
const todoInput = document.querySelector(".input");
const todo_List = document.querySelector(".todo_List");

const TODOS_Ls = "toDos";
const toDOS = [];

function formHandler(e) {
  e.preventDefault(); // submit 후 재 랜더링 되지 않도록 하는 역활

  if (todoInput.value !== "") {
    let inValue = todoInput.value; // input 내용을 inValue 변수에 담는다.
    paintTodo(inValue);

    todoInput.value = ""; // input 입력창 초기화
    return;
  } else {
    alert("할일을 입력하세요"); // 입력내용이 없을경우 alert을 통해 알려주는 역활
  }
}

function deleteHandler(e) {
  const btn = e.target;
  const li = btn.parentNode;
  todo_List.removeChild(li);
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDOS.length + 1;

  delBtn.innerText = "X";
  delBtn.classList.add("delBtn_list");
  span.innerText = text;
  span.classList.add("todo_Content");

  li.appendChild(span);
  li.appendChild(delBtn);
  delBtn.addEventListener("click", deleteHandler);
  todo_List.appendChild(li);

  const toDoObj = {
    id: newId,
    text,
  };
  toDOS.push(toDoObj);

  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_Ls, JSON.stringify(toDOS));
}

function loadedToDos() {
  const loadedToDos = localStorage.getItem(TODOS_Ls);

  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintTodo(toDo.text);
    });
  }
}

function init() {
  loadedToDos();
  todoForm.addEventListener("submit", formHandler); // Submit 발생 EventHandler
}

init();
