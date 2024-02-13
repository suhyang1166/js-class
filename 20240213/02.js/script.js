// 1) 기념일을 계산하기 위한 특정한 날짜 정보
// 2) 현시점의 날짜 정보

// 만난지 며칠째 되는 날
let now = new Date();
let firstDay = new Date("2024/1/1");
let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
let passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));
console.log(passedDay);

const accent = document.querySelector("#accent span");
accent.innerText = `${passedDay}일`;

// 100일째 되는 날
// let future = toFirst + 100 * (24 * 60 * 60 * 1000);
// let someday = new Date(future);
// let year = someday.getFullYear();
// let month = someday.getMonth() + 1;
// let date = someday.getDate();

// const date100 = document.querySelector("#date100");
// date100.innerText = `${year}년 ${month}월 ${date}일`;

// 200일째 되는 날
// future = toFirst + 200 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();

// const date200 = document.querySelector("#date200");
// date200.innerText = `${year}년 ${month}월 ${date}일`;

// 365일째 되는 날
// future = toFirst + 365 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();

// const date365 = document.querySelector("#date365");
// date365.innerText = `${year}년 ${month}월 ${date}일`;

// 500일째 되는 날
// future = toFirst + 500 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();

// const date500 = document.querySelector("#date500");
// date500.innerText = `${year}년 ${month}월 ${date}일`;

// 함수를 활용해서 상단의 반복적으로 사용되고 있는 변수를 효율적으로 줄여보자

const calcDate = (days) => {
  let future = toFirst + days * (24 * 60 * 60 * 1000);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();
  document.querySelector(
    "#date" + days
  ).innerText = `${year}년 ${month}월 ${date}일`;
};

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
