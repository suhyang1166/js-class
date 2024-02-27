const str5 = "Hello, everyone";
console.log(typeof str5);

// 문자열 => 배열
const array2 = str5.split("");
console.log(array2);

const array3 = [...str5];
console.log(array3);

const array4 = Array.from(str5);
console.log(array4);

// 배열 => 문자열
const str6 = array4.join("");
//""를 기준으로 각각의 아이템 값을 문자열로 변환 시켜라 라는 함수
console.log(str6);

// 문자열에 대한 문법을 언제사용하는가? => 회원가입 & 로그인 페이지 => 사용자를 대상으로 체크하고 싶을때 사용
// 대문자를 1개이상 || 특수문자 || 몇 글자이상 회원가입이 가능한지

const string = prompt("영문 소문자로 된 문자열을 입력하세요!");

// const firstCh = string[0].toUpperCase();
// const remainStr = string.slice(1);
// const result = firstCh + remainStr;
// console.log(remainStr);

const result = [string[0].toUpperCase(), ...string.slice(1)].join("");

document.write(result);
