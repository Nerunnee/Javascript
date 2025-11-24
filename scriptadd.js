// Нэмэлт бодлого

// Бодлого 1.

let arr = ["apple", "pear", "grape", "kiwi"];

let filtered = arr.filter((word) => word.includes("a"));

console.log("Н.Бодлого 1.", filtered);

// Бодлого 2.

arr = ["hi", "to", "see", "me", "go"];

let indexNeg = arr[0].length;

removed = arr.filter((word) => word.length === indexNeg);

console.log("Н.Бодлого 2.", removed);
