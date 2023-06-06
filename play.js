// const student = {
//   name: "Rahul",
//   age: 23,
//   greet1() {
//     console.log("hi i am " + this.name);
//   },
//   greet: () => console.log("hi i am " + this.name), //this is arrow function so it will have this outside.
// };

// var name = "Sandesh";
// student.greet1();
// student.greet();

// const aray = ["apple", "oranges", "", "mango", "", "lemon"];
// const modif = aray.map((e) => (e === "" ? "empty string" : e));
// console.log(modif);

async function run() {
  console.log("a");

  console.log("b");

  await new Promise((res, rej) => {
    setTimeout(() => {
      console.log("c");

      res();
    }, 3000);
  });

  await new Promise((res, rej) => {
    setTimeout(() => {
      console.log("d");

      res();
    }, 0);
  });

  console.log("e");
}

run();
