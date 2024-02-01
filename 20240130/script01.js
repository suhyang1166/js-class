// const openButton = document.querySelector(".open");
// const container = document.querySelector(".container");
// const closebutton = document.querySelector(".close");

// const display = () => {
//   container.style.display = "flex";
//   openButton.style.display = "none";
// };

// const close = () => {
//   container.style.display = "none";
//   openButton.style.display = "block";
// };

// openButton.addEventListener("click", display);

// closebutton.addEventListener("click", close);

// --
// const showData = (name, age) => {
//   alert(`안녕하세요! ${name}님. 나이가 ${age}살 이군요.`);
// };

// const getData = (callback) => {
//   const userName = prompt("당신의 이름을 입력하세요");
//   const userAge = prompt("당신의 나이를 입력하세요!");
//   callback(userName, userAge);
// };

// getData(showData);

// 사용자에게 특정 숫자를 전달받으세요
// 해당 숫자가 양수라면, 00숫자는 양수입니다! 알림창 출력
// 해당 숫자가 음수라면, 00숫자는 음수입니다! 알림창 출력
// 해당 숫자가 양수, 음수도 아닌 0이라면, 입력하신 숫자는 0입니다 라고 출려

// const show = (a, b, c = 0) => {
//   alert(`${a}숫자는 양수입니다`);
//   alert("${b}숫자는 음수입니다");
//   alert("입력하신는 숫자는 ${c}입니다");
// };

// const data = (callback) => {
//   const num = prompt("숫자를 입력해주세요");
//   callback(num);
// };

// data(show);

// 예외조항 처리
// 숫자가 아닌 예기치 못한 값이 왔을 때에는 애초에 프로그래밍 코드 자체가 실행될 필요가 없음!

const number = Number(prompt("숫자를 입력하세요!"));

// isNaN() => 매개변수에 들어온 값이 숫자인지, 아닌지를 논리적으로 판단해주는 함수입니다!

// 매개변수가 숫자이면, false 반환 || 매개변수가 숫자가 아니면, true 반환

// const isPositive = (n) => {
//   if (n > 0) {
//     alert(`${n}은 양수입니다`);
//   } else if (n < 0) {
//     alert(`${n}은 음수입니다`);
//   } else {
//     alert(`${n}은 0은 입니다`);
//   }
// };

// if (!isNaN(number)) {
//   isPositive(number);
// }

const hello = () => {
  console.log("안녕하세요!");
};

setTimeout(hello, 3000);
