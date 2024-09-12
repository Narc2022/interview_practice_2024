// The event loop continuously checks the call stack and the callback queue.
//  If the call stack is empty, it takes the first
//  function from the callback queue and pushes it onto the call stack for execution.

console.log("start");

setTimeout(function cb() {
  console.log("callback");
}, 5000);

console.log("end");
