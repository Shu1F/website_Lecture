const obj = {
  first_name: "Mafia",
  last_name: "Code",
  printFullName: function () {
    console.log(this.first_name);
    //呼び出した関数：.の前を指す
    const fn = function () {
      console.log(this);
    };
    window.setTimeout(fn);
  },
};

const window = {
  setTimeout: function (fn) {
    fn();
  },
};

// const obj = {
//   first_name: "Mafia",
//   last_name: "Code",
//   printFullName: function () {
//     console.log(this.first_name);
//     const fn = function () {
//       console.log(this);
//     };
//     window.setTimeout(fn);
//   },
// };

class MyObj {
  constructor() {
    this.first_name = "Mafia";
    this.last_name = "Code";
  }

  printFullName() {
    console.log(this.first_name);
  }
}
//↓ここでオブジェクト生成
const obj2 = new MyObj();

obj.printFullName();
obj2.printFullName();
