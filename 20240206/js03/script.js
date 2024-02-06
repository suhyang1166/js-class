// const newP = document.createElement("p");
// const textNode = document.createTextNode("Node.js");
// const body = document.querySelector("body");

// newP.appendChild(textNode);

// document.body.appendChild(newP);

const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector("#orderInfo");
const title = document.querySelector("#container h2");

orderButton.addEventListener(
  "click",
  () => {
    const newP = document.createElement("p");
    const textNode = document.createTextNode(
      title.innerText + "이 당일 배송됩니다!"
    );
    const newImg = document.createElement("img");
    const srcNode = document.createAttribute("src");
    srcNode.value = "./img01.png";
    newImg.setAttributeNode(srcNode);
    newImg.style.width = "200px";

    newP.appendChild(textNode);
    orderInfo.appendChild(newP);
    orderInfo.appendChild(newImg);
  },
  { once: true }
);
