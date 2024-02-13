// const addNum = (a, b) => {
//   return a + b;
// };

// const result = addNum(1, 3, 5, 7);

// console.log(result);

// 반복문 / 증감연산자 / ...연산자

// const fruits = ['apple', 'banana', 'grape'];
// console.log(...fruits);
// 전개 연산자 구문
// 배열 내 들어가 있는 값을 찾아오게함

// const addNum = (...numbers) => {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };

// const result = addNum(1, 3, 5, 7);
// console.log(result);

// JS 내장(되어 있는)함수 = 개발자들이 자주 빈번하게 사용해야하니까!

// 일정시간마다 무언가를 반복실행시켜주는 타이머 함수 >> 내장함수

// setInterval()

// const greeting = () => {
//   console.log('안녕하세요!');
// };

// setInterval(greeting, 2000);

// 일정시간마다 무언가를 증가시카는 setInterval함수를 먼추게 하는 함수! = clearInterval()

// let counter = 0;

// const hello = () => {
//   console.log('반갑습니다!');
//   counter++;
//   if (counter === 5) {
//     clearInterval(hello);
//   }
// };

// const timer = setInterval(hello, 2000);

// const hour = document.querySelector('.hour');
// const min = document.querySelector('.min');
// const sec = document.querySelector('.sec');

// const clock = () => {
//   const now = new Date();
//   hour.innerText = now.getHours();
//   min.innerText = now.getMinutes();
//   sec.innerText = now.getSeconds();
// };

// setInterval(clock, 1000);

// const hello = () => {
//   console.log("안녕하세요!");
// };

// setTimeout(hello, 3000);

// const img = document.querySelector("img");
// const desc = document.querySelectorAll(".user");

// desc[0].innerText = "이름 : 아이유";

// const desc = document.querySelector("#desc");
// desc.innerHTML = '<p class="user">이름 : 아이유</p>';

// const title = document.querySelector("#title");
// const userName = document.querySelectorAll(".user");

// userName[0].addEventListener("click", () => {
// if (!userName[0].classList.contains("clicked")) {
//   userName[0].innerText = "이름 : 영심이";
//   userName[0].classList.add("clicked");
// } else {
//   userName[0].innerText = "이름 : 아이유";
//   userName[0].classList.remove("clicked");
// }
//   userName[0].classList.toggle("clicked");
// });

// title.addEventListener("click", () => {
//   title.innerText = "프로필";
// });

// const btn = document.querySelector(".btn");
// const body = document.querySelector("body");

// btn.addEventListener("click", () => {
//   body.classList.toggle("dark");
// });
