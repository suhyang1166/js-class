// const name = prompt("당신의 이름을 말씀해주세요!");
// const height = prompt("당신의 키를 알려주세요!");
// const weight = prompt("당신의 몸무게를 알려주세요!");

// const normal_w = (height - 100) * 0.9;
// let result = weight >= normal_w - 5 && weight <= normal_w + 5;

// result = result ? "적정체중입니다!" : "체중관리 해주세요!";
// document.write(`${name}님은 ${result}`);

const newBook = {
  title: "마흔에 읽는 쇼펜하우어",
  auth: "강용수",
  publisher: "유노북스",
  launching: "2023-09-07",
  price: 17000,
};

/* 객체는 Key & Value 구성 */
/* Key & Value가 반드시 한 쌍으로 구성" */
/* 한쌍으로 구성되어진 key & value를 프로퍼티(property=속성)라고 부름 */

/* 객체 안에 포함되어 있는 값을 찾아올 수 있음 */

/* 객체 뒤에 .Key*/
/* 온점 표기법*/
const detail01 = newBook.title;
console.log(detail01);

/* 대괄호 표기법 */
const detail02 = newBook["publisher"];
console.log(detail02);

/* 배열을 사용하는 이유 => 규칙성을 가지고 있는 데이터를 저장하고 보관 */

const arr = [2, 4, 6, 8, 10];
const colors = ["red", "green", "blue"];
const fruit = ["banana", 100, true];

/* 배열은 인덱스(0에서 시작함)를 가지고 있음 */
const thisValue = colors[2];
console.log(thisValue);

/* 배열에는 굉장히 다양한 함수 & 프로퍼티가 있다 */
const total = arr.length;
console.log(total);
