// 1) 버튼에 대한 정의
// 2) nav 정의
// 3) 버튼을 클릭했을 때, 왼족에서 nav 출력
// 4) active라는 클래스를 부여한다!

const btn = document.querySelector("#btn");
const nav = document.querySelector("#nav");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  nav.classList.toggle("active");
});

// class 함수 VS arrow 함수 
// hoisting 기능 구현
