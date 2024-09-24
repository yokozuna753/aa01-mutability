/*
Define a function wordsLongerThan5 that takes in an array of words. The
function should return a NEW array containing only the words that are longer
than 5 characters.
*/

/*
 - loop through array
 - if length of word is > 5, push to a new array
*/

function wordsLongerThan5(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let words1 = ["bike", "skateboard", "scooter", "moped"];
let longerWords1 = wordsLongerThan5(words1);
console.log(longerWords1); //=> [ 'skateboard', 'scooter' ]
console.log(words1 === longerWords1); //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = wordsLongerThan5;
