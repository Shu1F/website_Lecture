// document.addEventListener("DOMContentLoaded", function () {
//   let str = document.querySelector(".animate-title");
//   let strContent = str.textContent.split(" ");
//   console.log(strContent);
// });
document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".animate-title");
  const str = el.innerHTML.trim().split("");
  //   let concatstr = "";

  //   for (let c of str) {
  //     c = c.replace(/\s+/, "&nbsp;");
  //     concatstr += `<span class="char">${c}</span>`;
  //   }
  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, "&nbsp;");
    return `${acc}<span class="char">${curr}</span>`;
  }, "");
});
