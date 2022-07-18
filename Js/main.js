const todoForm = document.querySelector(".todo_Form");
const todoInput = document.querySelector(".input");
const todo_List = document.querySelector(".todo_List");

const TODOS_Ls = "toDos"; // localStorage 저장 객체명 할당
let toDOS = []; // todoItem 저장 배열 (localStorage 저장용)

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
  const btn = e.target; // btn e.target을 통해 식별 후 변수 할당
  const li = btn.parentNode; // btn의 부모 노드를 식별 후 변수 할당
  todo_List.removeChild(li); // 찾아낸 부모인자 제거 (Item)

  const cleanTodo = toDOS.filter((todo) => {
    //filter를 통해 주어진 조건이 만족하는 요소만 모아 새로울 배열 반환
    return todo.id !== parseInt(li.id); // todo.id와 li.id가 같지 않을 경우 아이템만 return 으로 전달
  });

  toDOS = cleanTodo; // filter를 통한 정리된 배열 toDOS 전달
  saveToDos(); // 신규 toDOS localStorage 저장
}

function paintTodo(text) {
  const li = document.createElement("li"); // li tag 생성 (item container)
  const delBtn = document.createElement("button"); // button tag 생성 (삭제버튼)
  const span = document.createElement("span"); // span tag 생성 (글)
  const newId = toDOS.length + 1; // 식별 ID 생성

  delBtn.innerText = "X"; // delete btn UI 삽입
  delBtn.classList.add("delBtn_list"); // delete btn className 삽입 (css용)
  span.innerText = text; // span tag에 input value 삽입
  span.classList.add("todo_Content"); // span tag className 삽입 (css용)

  li.appendChild(span); // span tag li 자식 노드로 삽입
  li.appendChild(delBtn); // delete btn li 자식 노드로 삽입
  li.id = newId;

  delBtn.addEventListener("click", deleteHandler); // delete btn click 기능호출
  todo_List.appendChild(li); // li tag를 ul tag 자식 노드로 삽입
  const toDoObj = {
    id: newId,
    text,
  };

  toDOS.push(toDoObj); // toDos 배열에 저장 (id, text)

  saveToDos(); // toDos 배열에 저장된 데이터가 localStorage에 저장될 수 있도록 실행
}

function saveToDos() {
  console.log(toDOS);
  localStorage.setItem(TODOS_Ls, JSON.stringify(toDOS)); // localStorage에 TodoItem 삽입
  // JSON.stringify를 통해 기존 데이터를 JSON Data로 변환
}

function loadedToDos() {
  const loadedToDos = localStorage.getItem(TODOS_Ls); // localStorage에 저장된 Data 가져와 변수 할당

  if (loadedToDos !== null) {
    //localStorage에 Data가 있을 경우만 씰행
    const parsedToDos = JSON.parse(loadedToDos); // JSON data를 문자열로 변환
    // JSON.parse를 통해 JSON data -> 일반 data 변환
    parsedToDos.forEach(function (toDo) {
      //forEach 를 통해 배열의 요소를 각각 paintTodo에 전달
      paintTodo(toDo.text); // 가져온 JSON Data의 text 항목을 paint todo에 전달
    });
  }
}

function init() {
  loadedToDos(); // localStorage Data 가져오는 함수실행
  todoForm.addEventListener("submit", formHandler); // Submit 발생 EventHandler
}

init();

// 연결도
// init -> loadedToDos, form handler
// loadedToDos -> paintTodo
// form handler -> paintTodo
// paintTodo -> delete handler, saveTodos
