let obj = {
  name: "Sachin",
};

let user = Object.assign({}, obj);
user.name = "Narsingh";

console.log("obj", obj);
// output:
{
  name: "Sachin";
}
console.log("user", user);
// output:
{
  name: "Narsingh";
}

// Now lets see the nested object. Shalow copy don't work in for nested object.
