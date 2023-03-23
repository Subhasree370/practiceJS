/**
 * Write a JavaScript function to get 4th(nth) largest element from an unsorted array.

Test Data :
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652]));
89
 */

// function nthlargest(arr1, nth) {
//   arr1.sort(function (a, b) {
//     return b - a;
//   });
//   return arr1[nth - 1];
// }

function nthlargest(arr1, nth) {
  for (let j = 0; j < arr1.length; j++) {
    for (let i = 0; i < arr1.length - j - 1; i++) {
      if (arr1[i] > arr1[i + 1]) {
        let temp = arr1[i];
        arr1[i] = arr1[i + 1];
        arr1[i + 1] = temp;
      }
    }
  }
  console.log(arr1);
  return arr1[nth + 1];
}
const arr1 = [43, 56, 89, 90, 10, 99, 652, 23, 88];
console.log(nthlargest(arr1, 4));
