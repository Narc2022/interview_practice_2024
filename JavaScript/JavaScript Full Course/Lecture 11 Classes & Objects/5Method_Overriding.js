// If child & Parent have same PaymentMethodChangeEvent,child's
// method will be used that is known as method overriding

class Person {
  constructor() {
    this.species = "homo sapiens";
  }
  eat() {
    console.log("eat");
  }

  sleep() {
    console.log("sleep");
  }

  work() {
    console.log("Solve Problem");
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
saviObj.work();
