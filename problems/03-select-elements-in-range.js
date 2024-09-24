/*
Define a function called selectElementsInRange that takes in three parameters.
The first parameter should be an array. The second parameter should be a
starting number in a range of indices, and the third parameter should be the
ending number in the range. The function should return all elements that have
indices within the range of indices defined by the starting and ending numbers,
inclusive.
*/

/*
- array with a starting index and ending index
- loop through the given array
- return all of the values inclusive of the two indexes
    a. i want to push the first index, all of the values after and including the last index
*/

function selectElementsInRange(arr, idx1, idxend) {
  let i = idx1;
  let newArr = [];

  while (i <= idxend) {
    console.log("before push");
    newArr.push(arr[i]);
    console.log("after push", newArr);
    i++;
    console.log("index changed", i);
  }
  return newArr;
}

console.log(selectElementsInRange([1, 2, 3], 0, 1)); // [1, 2]
console.log(selectElementsInRange([2, 6, 9, 3, 1], 0, 3)); // [2, 6, 9, 3]
console.log(selectElementsInRange([7, 9, 10, 4, 5], 2, 4)); // [10, 4, 5]

/******************* DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = selectElementsInRange;
