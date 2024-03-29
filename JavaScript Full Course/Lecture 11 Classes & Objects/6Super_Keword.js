// super Keyword is used to call the constructor of its parent class to access parents properties and method.

// class Person {
//   constructor() {
//     this.species = "homo sapiens";
//   }
//   eat() {
//     console.log("eat");
//   }
// }

// class Engineer extends Person {
//   constructor(branch) {
//     this.branch = branch;
//   }
//   work() {
//     console.log("Solve Problem, Build Something");
//   }
// }

// Error free

class Person {
  constructor(name) {
    this.species = "homo sapiens";
    this.name = name;
  }
  eat() {
    console.log("eat");
  }
}

class Engineer extends Person {
  constructor(branch) {
    super(name); // to invoke parent class constructor
    this.branch = branch;
  }
  work() {
    super.eat();
    console.log("Solve Problem, Build Something");
  }
}

let sachinObj = new Engineer("Computer Application");
