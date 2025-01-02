const child = document.querySelector(".child");
const cb = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("inview");
    } else {
      entry.target.classList.remove("inview");
    }
  });
};
const options = {
  root: null,
};
const io = new IntersectionObserver(cb);
io.observe(child);
