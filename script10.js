// Function

// Bodlogo 1.

function numberSquare(n) {
  return n ** 2;
}

console.log("F.Bodlogo 1.", numberSquare(4));

// Bodlogo 2.

function isEven(n) {
  if (n % 2 === 0) return true;
  if (n % 2 !== 0) return false;
}

console.log("F.Bodlogo 2.", isEven(4));

// Bodlogo 3.

function greet(name) {
  return `Hello ${name}`;
}

console.log("F.Bodlogo 3.", greet("Norovoo"));

// Bodlogo 4.

function sumTwo(a, b) {
  return a + b;
}

console.log("F.Bodlogo 4.", sumTwo(4, 5));

// Bodlogo 5.

function maxOfTwo(a, b) {
  if (a > b) return a;
  if (a < b) return b;
}

console.log("F.Bodlogo 5.", maxOfTwo(10, 5));

// Bodlogo 6.

function getLength(arr) {
  return arr.length;
}

console.log("F.Bodlogo 6.", getLength(["Apple", "Orange", "Mango", "Kiwi"]));

// Bodlogo 7.

function toUpper(str) {
  return str.toUpperCase();
}

console.log("F.Bodlogo 7.", toUpper("javascript"));

// Bodlogo 8.

function isPositive(n) {
  if (n > 0) return true;
  if (n < 0) return false;
  if (n === 0) return null;
}

console.log("F.Bodlogo 8.", isPositive(5));

// Bodlogo 9.

function firstItem(arr) {
  return arr[0];
}

console.log("F.Bodlogo 9.", firstItem("Hello world"));
