// Example 1

// class Parent {
//   hello() {
//     console.log("hello");
//   }
// }

// class Child extends Parent {}

// let obj = new Child();

// Example 2

class Person {
  eat() {
    console.log("eat");
  }

  sleep() {
    console.log("sleep");
  }
}

class Engineer extends Person {
  work() {
    console.log("Solve Problem, Build Something");
  }
}

class Doctor extends Person {
  work() {
    console.log("Treat Patients");
  }
}

let sachinObj = new Engineer();
let saviObj = new Doctor();
