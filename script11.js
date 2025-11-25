// // Homework

// // H.W Bodlogo 1.

// numbers = [1, 2, 3, 4];

// firstNumber = numbers[0];

// function sumArray(nums) {
//   sum = 0;

//   for (let i = 0; i < nums.lenght; i++) {
//     const num = nums[i];
//     sum += num;
//   }

//   return sum;
// }

// sum = sumArray(numbers);

// console.log("H.W Bodlogo 1.", sum);

// // H.W Bodlogo 2.

// // function reverseString(str) {
// //   return str.split("").reverse().join("");
// // }

// function reverseString(str) {
//   let reseved = "";

//   for (let char of str) {
//     reseved = char + reseved;
//   }

//   return reseved;
// }

// console.log("H.W Bodlogo 2.", reverseString("Hello"));

// // H.W Bodlogo 3.

// numbers = [8, 2, 3, 4, 6];

// function maxInArray(nums) {
//   let maxNum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < maxNum) {
//       maxNum = maxNum;
//     } else {
//       maxNum = nums[i];
//     }
//   }
//   return maxNum;
// }

// const result = maxInArray(numbers);
// console.log("H.W Bodlogo 3.", result);

// // H.W Bodlogo 4.

// text = "hello";

// function capitalize(word) {
//   firstUseg = word[0].toUpperCase();
//   return firstUseg;
// }

// const word = capitalize(text);
// console.log("H.W Bodlogo 4.", word);

// // H.W Bodlogo 5.

// number = 5;

// function factorial(n) {
//   num = 1;
//   for (let i = 1; i <= n; i++) {
//     num = num * i;
//   }

//   return num;
// }

// const log = factorial(number);
// console.log("H.W Bodlogo 5.", log);

// H.W Bodlogo 6.

const palindRomeString = "tre";

function isPalindrome(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    reversed += char;
  }

  if (str === reversed) return true;
  if (str !== reversed) return false;
}

console.log("H.W Bodlogo 6.", isPalindrome(palindRomeString));
