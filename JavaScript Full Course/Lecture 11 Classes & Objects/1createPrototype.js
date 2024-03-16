const employee = {
  calcTax1() {
    console.log("tax rate is 10%");
  },
};

const karanArjun = {
  salary: 50000,
  calcTax1() {
    console.log("tax rate is 30%");
  },
};

karanArjun.__proto__ = employee;
