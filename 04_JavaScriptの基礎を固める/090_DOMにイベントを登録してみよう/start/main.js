const btn = document.querySelector("#btn");
const h1 = document.querySelector("h1");

const changeBgColor = function () {
  h1.style.backgroundColor = "blue";
};

const changeColor = function () {
  h1.style.color = "red";
  //hello関数内ではthisはaddEventListenerの指すHTML要素を取得する。
};
btn.addEventListener("click", changeColor);
btn.addEventListener("click", changeBgColor);
// btn.removeEventListener("mouseenter", hello);
