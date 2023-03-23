/*
 *Question: Write a function that takes two arrays of integers as input and returns a new array that contains all the elements that are common to both arrays. For example, given the arrays [1, 2, 3, 4] and [3, 4, 5, 6], the function should return [3, 4].
 */
function commonValue(arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArray.push(arr2[j]);
      }
    }
  }
  return newArray;
}
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const set1 = [...new Set(arr1)]; // filter unique value
const set2 = [...new Set(arr2)];
console.log(commonValue(set1, set2));
