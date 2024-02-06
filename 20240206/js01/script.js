const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");
const pics = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg"];
console.log(arrows);

container.style.backgroundImage = `url(./images/${pics[0]})`;

// 현재 웹 브라우저에서 출력되고 있는 이미지가 몇 번째 인덱스 값을 갖고 있는 이미지인지 식별하게끔 하기 위한 인덱스 장치
let i = 0;

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    }
    container.style.backgroundImage = `url(./images/${pics[i]})`;
  });
});
