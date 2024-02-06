const title = document.querySelector("#title");
const author = document.querySelector("#author");
const save = document.querySelector("#save");
const bookList = document.querySelector("#booklist");

save.addEventListener("click", (e) => {
  e.preventDefault();

  const item = document.createElement("li");
  item.innerHTML = `${title.value} - ${author.value} <button class="delbutton">삭제</button>`;
  bookList.appendChild(item);

  title.value = "";
  author.value = "";

  // delButtons.forEach((delButton) => {

  // })
  const delButtons = document.querySelectorAll(".delButton");
  for (let delButton of delButtons) {
    delButton.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  }
});
