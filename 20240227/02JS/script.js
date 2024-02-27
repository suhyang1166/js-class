// 문자열에서 사용할 수 있는 다양한 메서드

// const t = "Hello Thank you good luck to you";

// console.log(t.charAt(16)); // 특정 문자열 하나를 찾아오고싶을때
// console.log(t.indexOf("you")); // 해당 문자열이 시작되는 인덱스값 찾아옴 > 일치하는 값이 앖는 경우 -1반환
// console.log(t.lastIndexOf("you")); // 뒤에서부터 찾았을때 you의 첫번쨰 값
// console.log(t.match("luck"));
// console.log(t.search("you")); // 가장 먼저 일치하는 값 첫번째
// console.log(t.substr(21, 4)); // 21번째 인덱스에서 4개의 값을 가져와라
// console.log(t.substring(6, 12)); // substr의 신문법 > 6번째 인덱스 값의 12번째 인덱스 이전까지의 값
// console.log(t.replace("you", "me")); // 교체하고싶은 단어를 교체> 좌측부터 검색해서 나오는 첫번째 값만 바꿔줌
// console.log(t.toLowerCase()); // 소문자 변경
// console.log(t.toUpperCase()); // 대문자 변경
// console.log(t.length);

// let s = t.split("");
// console.log(s);
// console.log(s[4]);

// const userName = prompt("당신의 영문 이름은?");
// const upperName = userName.toUpperCase();
// document.write(upperName, "<br/>");

// const userNum = prompt("당신의 연락처는?");
// const result = userNum.substring(0, userNum.length - 4) + "****";
// document.write(result);

// 사용자가 특정 사이트 회원가입

const userEmail = prompt("당신의 이메일 주소는?");
const arrUrl = [".com", ".co.kr", ".net", ".or.kr", ".go.kr"];

// 일반적인 이메일 주소 형식 : abc@naver.com

let check1 = false;
let check2 = false;

if (userEmail.indexOf("@") > 0) {
  check1 = true;
}

for (let i = 0; i < arrUrl.length; i++) {
  if (userEmail.indexOf(arrUrl[i]) > 0) {
    check2 = true;
  }
}

if (check1 && check2) {
  console.log(userEmail);
} else {
  alert("이메일 형식이 잘못되었습니다!");
}
