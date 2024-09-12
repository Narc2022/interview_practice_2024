let arr = [2, 2, 2, 2, 2, 3, 3, 3, 7, 7, 7, 7, 8, 8];
let count = {};
let largestCountNum = arr[0]; // Initialize with the first element
let maxCount = 0;

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  count[num] = (count[num] || 0) + 1; // Increment count

  // Update largestCountNum if current count is greater than maxCount
  if (count[num] > maxCount) {
    maxCount = count[num];
    largestCountNum = num;
  }
}

console.log("largestCountNum", largestCountNum); // Prints the number with the largest count
console.log("count", count); // Prints the count object
