class ToyotaCar {
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
fortuner.setBrand("Fortuner");
let lexes = new ToyotaCar();
lexes.setBrand("Lexes");
