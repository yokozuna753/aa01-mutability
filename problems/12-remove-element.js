/*
Define a function called removeElements that takes in three parameters. The
first parameter should be an array. The second parameter should be an integer
representing the index of the array at which the function should start removing
elements. The third parameter should be the number of elements that need to be
removed from the array. See test cases for examples.
*/

/*
-   function that loops through an array at a given index(startIdx), and removes a number of 
    elements(removeEle) starting from that index on in the array. 
- return the array
*/

function removeElements(arr, startIdx, removeEle) {
  arr.splice(startIdx, removeEle);
  //   let empty = [];
  if (startIdx > arr.length) return [];
  else if (startIdx % 2 === -1) return [];
  // console.log("array:", arr);

  // console.log('removing ele', arr);
  return arr;
}

console.log(removeElements([1, 2, 3], 1, 1)); // [1, 3]
console.log(removeElements([1, 2, 3], 1, 2)); // [1]
console.log(removeElements([1, 2, 3], 0, 1)); // [2, 3]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeElements;
