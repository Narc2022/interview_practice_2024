getName();
console.log(x);
console.log(getName);

var x = 7;

function getName() {
  console.log("a", a);
  let a = 12;
  console.log("Namaste Javascript");
}

// arrow function behave like a function so it will be undefined if we try to access before created.

// const getName = () => {
//   console.log("a", a);
//   let a = 12;
//   console.log("Namaste Javascript");
// };

getName();
console.log(x);
