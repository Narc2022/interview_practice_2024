// Write a function that finds the intersection of two sorted arrays.
// example [1,4,7,10] and [1,3,5,7,9,11] -> intersection is [1,7]

let arr1 = [1, 4, 7, 10];
let arr2 = [1, 3, 5, 7, 9, 11];

function intersection(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    console.log("arr1[i]", arr1[i]);
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        newArr = [...newArr, arr1[i]];
      }
    }
  }
  return newArr;
}

console.log("result", intersection(arr1, arr2));
