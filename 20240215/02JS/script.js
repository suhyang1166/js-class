// 1.todo 값이 입력된 input태그에 공간 정의
// 2.사용자가 클릭할 버튼의 공간 정의
// 3.사용자가 입력한 todo 값 찾아오기
// 4.사용자가 등록 버튼을 클릭했을 때, 이벤트 발생시키기
// 5.사용자가 입력한 값을 출력시킬 수 있는 공간 정의
// 6.ul태그 안에 사용자의 값을 넣어줄 수 있는 li태그 생성
// 7.사용자가 입력한 todo 값을 ul태그안에 출력해주기
// 8.Web API > localStorage 공간 활용해서 todo 값을 저장
// 9.localStorage 저장된 값을 찾아서 ul태그에 출력해주기
// 10.완료버튼을 클릭했을 때, todo값을 localStorage & ul태그 안에서 삭제해주기

const input = document.querySelector("#todo");
const button = document.querySelector("#button");
const ul = document.querySelector("ul");

let todos = [];
const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (e) => {
  const target = e.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  todos = target.remove();
};

// 입력자 값
const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    // li라는 노드를 만듬
    const deleteButton = document.createElement("button");
    const span = document.createElement("span");
    span.innerText = todo.text;
    deleteButton.innerText = "삭제";
    deleteButton.addEventListener("click", delItem);
    li.appendChild(span);
    li.appendChild(deleteButton);
    ul.appendChild(li);
    li.id = todo.id;
  }
};

const handler = (e) => {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
  };
  todos.push(todo);
  addItem(todo);
  save();
  input.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
  } else {
    handler();
  }

  todos = userTodos;
};

init();
button.addEventListener("submit", handler);

// localStorage.setItem("hello", "World");
// const myData = localStorage.getItem("hello");
// console.log(myData);
