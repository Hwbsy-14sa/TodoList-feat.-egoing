const delBtn = document.querySelector(".delBtn");
const todo_Lists = document.querySelector(".todo_List");
const todo_Items = document.querySelector(".todo_Content");

function deleteHandler() {
  todo_Lists.innerHTML = ""; // 투두리스트 내부 초기화
  localStorage.clear(); // localStorage 초기화
}

function init() {
  delBtn.addEventListener("click", deleteHandler);
}

init();
