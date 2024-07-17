const foo = () => {
  console.log(this.name);
};

foo({ name: "John" });
