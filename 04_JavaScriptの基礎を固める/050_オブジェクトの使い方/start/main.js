const person = {
  name: ["Shuichi", "Fujiike"],
  age: 21,
  gender: "Male",
  intersts: {
    sports: "basketball",
    music: "piano",
  },
  getFulName: function () {
    console.log(this.name[0] + this.name[1]);
  },
};
person.getFulName();
