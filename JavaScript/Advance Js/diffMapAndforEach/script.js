const arr = [2, 5, 3, 4, 7];

const mapArr = arr.map((ar) => {
  return ar + 2;
});

const forEachArr = arr.forEach((ar) => {
  ar + 3;
});

const filterMapArr = arr
  .map((ar) => {
    return ar + 2;
  })
  .filter((item) => item > 5);

console.log("mapArr", mapArr);
console.log("filterMapArr", filterMapArr);
console.log("forEachArr", forEachArr);
