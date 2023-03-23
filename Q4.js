// Write a function to remove duplicate characters that are consicutive in a string
// e.g. ABCCBEA => AEA, DFGGFABDCAAC => DFABD

let str1 = "ABCCBEA";
let str1Arr = str1.split('');
console.log(str1Arr + " == Final");

for (let i = 0; i < str1Arr.length; i++) {

    console.log(" == Final");
    if (str1Arr[i] == str1Arr[i + 1]) {
        str1Arr.splice(i+1, 1);
        str1Arr.splice(i, 1);
        console.log(str1Arr + "  == After");
        str1Arr = str1Arr.toString();
        console.log(str1Arr + " == Final");
    }
}
