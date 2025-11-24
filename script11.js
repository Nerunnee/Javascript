// Homework

// H.W Bodlogo 1.

function sumArray(arr) {
  return arr.join("");
}

console.log("H.W Bodlogo 1.", sumArray([1, 2, 3, 4, 5]));

// H.W Bodlogo 2.

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

function reverseString(str) {
  let reseved = "";

  for (let ch of str) {
    reseved = ch + reseved;
  }

  return reseved;
}

console.log("H.W Bodlogo 2.", reverseString("Hello"));

// H.W Bodlogo 3.
