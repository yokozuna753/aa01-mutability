/*
Define a function lessThan5 that takes an array of numbers and returns a NEW
array containing all the numbers in the input array that are less than 5.
*/

/*
 - function takes an array of numbers
 - loop through the input array
 - if the value at the index is less than the number 5 =>
 - push results into a new array
*/

function lessThan5(arr) {
  let newArr = [];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] < 5) newArr.push(arr[i]);
    // console.log("new array:", newArr);
    i++;
    // console.log("number changed:", arr[i]);
  }
  return newArr;
}

let nums1 = [1, -5, 10, 6, 2];
let filteredNums1 = lessThan5(nums1);
console.log(filteredNums1); //=> [1, -5, 2]
console.log(nums1 === filteredNums1); //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = lessThan5;
