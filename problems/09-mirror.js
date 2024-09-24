/*
Define a function called mirror that takes in an array as a parameter and
returns a new array where all the elements in the original array added to the
new array twice with the second set of elements in reverse order.
*/

function mirror(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i]);
    console.log(arr2);
  }
  return arr.concat(arr2.reverse());
}

console.log(mirror([1, 2, 3])); //=> [ 1, 2, 3, 3, 2, 1 ]
// console.log(mirror(['a', 'b', 'c', 'd']));//=> [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = mirror;
