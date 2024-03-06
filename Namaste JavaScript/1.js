// what happend when yo run javascript program?
//  Everything in javascript happens inside an execution context

var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);

console.log("square2", square2);
console.log("square4", square4);
