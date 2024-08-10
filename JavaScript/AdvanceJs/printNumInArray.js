let arr = ["1", "a", "b", "g", 1, "2", "5", 9, 10, 22];

function printNumInArr(arr) {
  let nuArr = [];
  for (let i = 0; i <= arr.length; i++) {
    if (typeof arr[i] == "number") {
      nuArr = [...nuArr, arr[i]];
    }
  }
  console.log("nuArr", nuArr);
}

printNumInArr(arr);
