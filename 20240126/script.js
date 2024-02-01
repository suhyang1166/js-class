/* for 문 */
/* 자바스크립트에서 반복문을 사용할 수 있는 데이어의 형식은 배열 */

// const students = ['Park', 'Kim', 'Lee', 'Kang'];
// const itemLength = students.length;

/* 배열은 다른 데이터 그룹과 달리, index 존재 */
/* index => 배열안에 담긴 아이템만의 고유 숫자! */
/* index => 항상 0에서부터 시작! */
/* 배열안에 담긴 각각의 아이템을 찾아오고자 할 때, 배열이름[0] */

// for (let i = 0; i < students.length; i++) {
//   document.write(`${students[i]}, `);
// }

/* Hoisting => 끌어올리다! */
/* 함수를 정의 => 호출하다 */

// students.forEach(function (student) {
//   document.write(`${student}, `);
// });
// students.forEach((student) => {
//   document.write(`${student}, `);
// });

// const bestSeller = {
//   title: '자바스크립트',
//   pubDate: '2024-01-06',
//   pages: 272,
//   finished: true,
// };

/* 객체안에 있는 value값을 찾아오는 2가지 방법 */
/* 1)온점 표기법 : bestSeller.title & 
   2) 대괄호 표기법 : bestSeller["title"] */

// for (key in bestSeller) {
//   document.write(`${key} : ${bestSeller[key]} `);
// }

// for (student of students) {
//   document.write(`${student}, `);
// }

// let stars = Number(prompt('별의 개수'));

// while (stars > 0) {
//   document.write('*');
//   stars--;
// }

// do {
//   document.write('*');
//   stars--;
// } while (stars > 0);

// 반복문을 활용한 예제!
// 1) 사용자에게 자연수를 받아서 해당 숫자가 소수인지 아닌지를 확인하는 프로그래밍 코드를 설계!
// 1. 사용자에게 숫자를 받는다
// prompt()

// 2. 사용자에게 받은 숫자를 변수에 저장한다
// Variable = 변수 선언할 수 있다면 가능!

// 3. 사용자에게 받은 숫자가 소수인지 여부를 확인한다
// 수학 > 소수 : 1과 자기 자신으로만 나눌 수 있는 숫자
// 소수 : 2, 3, 5, 7 소수!!! && 1은 소수가 아님!
// "조건식"을 활용해서 2부터 숫자가 "반복적"으로 증가하도록 설정
// 숫자가 증가할 떼마다, 사용자가 입력한 해당 숫자를 나눠볼 수 있도록 설정
// 해당 숫자의 크기만큼 반복할 떼, 한 번도 나눠지지 않는다면 = 소수라고 인식한다
// 그런데, 만약 그게 아니라면, 해당 숫자는 소수가 아니라고 인식

// 4. 위에서 확인한 그 내용을 사용자에게 출력해서 보여준다

// 예외조항 처리!

// 변수를 선언만 함!!
// 사용자가 입력한 값이 소수라고 한다면, 이 비어있는 변수 공간에 true
// 사용자가 입력한 값이 소수가 아니라고 한다면, 이 비어있는 변수 공간 false

// const number = Number(prompt('자연수를 입력하세요!'));

// let isPrime;

// if (number === 1) {
//   document.write(`${number}은 소수가 아닙니다!`);
// } else if (number === 2) {
//   isPrime = true;
// } else {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     } else {
//       isPrime = true;
//     }
//   }
// }
// if (isPrime) {
//   document.write(`${number}는 소수입니다.`);
// } else {
//   document.write(`${number}는 소수가 아닙니다.`);
// }

// 배열 : [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
// 반복문 & 조건문을 활용해서 10이상인 숫자만 웹 브라우저 화면에 출력

// 숫자 입력 >>  20미만 숫자의 홀수 중 10이상의 숫자 출력 >> 10 < i < 20의 홀수,,,,true >> 홀수는 2로 나눴을 때 딱 안나눠짐 i = 2 >> num % i = false

// 1. 배열을 읽어와야 함
// 2. 읽어온 배열의 아이템을 한 개씩 순차 & 반복적으로 10보다 큰지 여부를 검증

// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     document.write(`${arr[i]}, `);
//   }
// }

// 3. 반복문 중 "for문"을 사용해서 구구단 2~5단까지 웹 브라우저에 출력해보세요!

// 숫자입력X>write >> 2~5단이 나오려면 number * number

// 2X1 = 2~2X9 * 5단

//1) 숫자가 2부터 5까지 증가할 수 있는 코드를 작성한다!
//2) 숫자가2부터 5까지 증가했다면. 그 증가한 숫자에 다시 1부터 9까지 곱해야한다
//2_1) 1부터 9까지의 숫자는 어디에서?
//2_2) 1부터 9까지의 숫자는 또다시 반복해서 증가를 시켜줘야한다!

//중첩 for문

// for (let i = 2; i <= 5; i++) {
//   document.write('<h2>' + `${i}단` + '<h2>');
//   for (let n = 1; n <= 9; n++) {
//     document.write(`${i} x ${n} = ${i * n}`);
//     document.write('<br/>');
//   }
// }

// 4. 중첩 for문을 활용해서 다음 테이블을 완성해보세요!

// 1) 숫자가 1부터 25까지 필요하다
// 2) 테이블의 형식으로 작성
//  (*행 X 열 기준)

// 3) html에서 table 태그를 완성하려면 반드시 가장 바깥요소 <table> <tr> <td>

let num = 1;
let t = '<table border=1>';
for (let i = 1; i <= 5; i++) {
  t += '<tr>';
  for (let k = 1; k <= 5; k++) {
    t += '<td>' + num + '</td>';
    num++;
  }
  t += '</tr>';
}
t += '</table>';

document.write(t);
