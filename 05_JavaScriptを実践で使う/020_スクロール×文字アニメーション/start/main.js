document.addEventListener("DOMContentLoaded", function () {
  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TextAnimation(el);
      ta.animate();
    }
  };

  const so = new ScrollObserver(".animate-title", cb);
  // const els = document.querySelectorAll(".animate-title");
  // const cb = function (entries, observer) {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       // const ta = new TextAnimation(entry.target);
  //       // ta.animate();
  //       observer.unobserve(entry.target);
  //     } else {
  //     }
  //   });
  // };
  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0,
  // };
  // const io = new IntersectionObserver(cb, options);
  // els.forEach((el) => io.observe(el));
});

class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    this.cb = cb;
    this.options = Object.assign(defaultOptions, options);
    this._init();
  }
  _init() {
    const callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // const ta = new TextAnimation(entry.target);
          // ta.animate();

          this.cb(entry.target, true);
          observer.unobserve(entry.target);
        } else {
          this.cb(entry.target, false);
        }
      });
    };
    const io = new IntersectionObserver(callback.bind(this), options);
    this.els.forEach((el) => io.observe(el));
  }
}
