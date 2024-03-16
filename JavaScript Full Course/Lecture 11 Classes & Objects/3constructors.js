class ToyotaCar {
  constructor(brand, mileage) {
    console.log("creating new object");
    this.brand = brand;
    this.mileage = mileage;
  }
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }

  setBrand(brand) {
    this.brand = brand;
  }
}

let fortuner = new ToyotaCar();
console.log(fortuner);
let lexes = new ToyotaCar();
console.log(lexes);
