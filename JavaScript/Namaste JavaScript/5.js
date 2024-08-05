// How functions work in js & variable environment?
var x = 1;
a();
b();
console.log("x", x);
function a() {
  var x = 10;
  console.log("x", x);
}

function b() {
  var x = 20;
  console.log("x", x);
}
