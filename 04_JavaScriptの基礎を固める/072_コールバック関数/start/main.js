// function hello(callback, lastName) {
//   console.log("hello" + callback(lastName));
// }

// hello(function (name) {
//   return "Shuichi" + name;
// }, "Fujiike");

function doSomething(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

function multiply(a, b) {
  return a * b;
}

function plus(a, b) {
  return a + b;
}

doSomething(2, 2, multiply);
doSomething(3, 3, plus);
