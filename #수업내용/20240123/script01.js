// 변수는 일종의 바구니의 역할!!!
// 변수를 만드는 행위 = "선언"
// 선언한 변수에 값을 담는 행위 = "할당"
// 변수를 선언할 때에는 반드시 3개의 키워드 중 하나만 선택!!
// var let const
// var => 재선언 & 재할당 O
// variable = 변수 (*거의 실무는 사용하지 않음)
// const => 재선언 & 재할당 x (*안정적)

// const num = 10;
// console.log(num);

// const num = 20;

// var num = 10;
// console.log(num);

// var num = 20;
// console.log(num);

// let num = 10;
// console.log(num);

/* 변수안에 담긴 값을 재할당 */
// num = 20;
// console.log(num);

// const str = "화요일";
// console.log(str);

// str = "수요일";

// var : 재선언 & 재할당 모두 가능
// let : 재선언 불가 & 재할당만 가능
// const : 재선언 & 재할당 모두 불가능

// const num01 = 10;
// const num02 = 20;

// const sum = num01 + num02;
// console.log(sum);

// const num03 = 100;
// const str01 = "Lucky";
// const boolean01 = false;
// const obj = {
//   name: "david",
//   age: 20,
// };
// const arr = [1, 2, 3, 4, 5];
// const fnc = function () {
//   console.log("test");
// };

// console.log(typeof num03);
// console.log(typeof str01);
// console.log(typeof boolean01);
// console.log(typeof obj);
// console.log(typeof arr);
// console.log(typeof fnc);

const name = "홍길동";
const classroom = "201";
// console.log(name + "님 " + classroom + "호 강의실로 입장하세요.");

/* 템플릿 리터럴 */
console.log(`${name}님 ${classroom}호 강의실로 입장하세요.`);
