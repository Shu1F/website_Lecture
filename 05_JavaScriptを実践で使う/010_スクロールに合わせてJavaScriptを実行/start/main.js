const child = document.querySelector(".child");
const cb = function (entries, observer) {
  // alert("intersecting");
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
  rootMargin: "",
};

const io = new IntersectionObserver(cb);
io.observe(child);
// io.observe(child1);
// io.observe(child2);
