/*
Write a function chooseyEndings that accepts an array of words and a suffix
string as arguments. The function should return a new array containing the words
that end in the given suffix. If the value passed in is not an array, return an
empty array.
*/

/*
goal: return an array with the value at each index that matches the given suffix param
- loop through the array

*/

function chooseyEndings(arr, suffix) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].endsWith(suffix) === true) newArr.push(arr[i]);
    // if (arr !== typeof "object") return [];
  }
  return newArr;
}

console.log(
  chooseyEndings(
    ["family", "hound", "catalyst", "fly", "timidly", "bond"],
    "ly"
  )
);
//=> [ 'family', 'fly', 'timidly' ]

console.log(
  chooseyEndings(
    ["family", "hound", "catalyst", "fly", "timidly", "bond"],
    "nd"
  )
);
//=> [ 'hound', 'bond' ]

console.log(chooseyEndings(17, "ily"));
//=> [ ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = chooseyEndings;
