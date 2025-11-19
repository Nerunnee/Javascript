console.log("array");

// Bodlogo 1.

let fruits = ["apple", "banana", "mango", "orange", "kiwi"];

const first = fruits.at(0);
const last = fruits.at(4);
// console.log(first.concat(last));
console.log("Bodlogo 1.", first, last);

// Bodlogo 2.

fruits = ["apple", "banana"];

fruits.push("mango");

console.log("Bodlogo 2.", fruits);

// Bodlogo 3.

num = [1, 2, 3, 4];
num.pop();

console.log("Bodlogo 3.", num);

// Bodlogo 4.

num = [10, 20, 30];
num.unshift(5);

console.log("Bodlogo 4.", num);

// Bodlogo 5.

num = [100, 200, 300];
num.shift();

console.log("Bodlogo 5.", num);

// Bodlogo 6.

num = [1, 2, 3];
num2 = [4, 5, 6];

console.log("Bodlogo 6.", num.concat(num2));

// Bodlogo 7.

fruits = ["apple", "banana", "orange"];
includes = fruits.includes("banana");

console.log("Bodlogo 7.", includes);

// Bodlogo 8.

const animal = ["cat", "dog", "bird"];
const index = [animal.indexOf("dog")];

console.log("Bodlogo 8.", index);

// Bodlogo 9.

const text = ["I", "love", "Javascript"];
join = text.join(" ");

console.log("Bodlogo 9.", join);

// Bodlogo 10.

num = [10, 20, 30, 40, 50];
newnum = num.slice(0, 3);

console.log("Bodlogo 10.", newnum);

// Bodlogo 11.

num = [1, 2, 3, 4];
num.splice(1, 1);

console.log("Bodlogo 11.", num);

// Bodlogo 12.

num = [1, 2, 3, 4, 5];
num.reverse();

console.log("Bodlogo 12.", num);

// Bodlogo 13.

fruits = ["banana", "apple", "cherry"];

console.log("Bodlogo 13.", fruits.sort());

// Bodlogo 14.

fruits = ["banana", "apple", "cherry"];

console.log("Bodlogo 14.", Array.isArray(fruits));

// Bodlogo 15.

const color = ["red", "blue", "green"];

console.log("Bodlogo 15.", color.length);

// Bodlogo 16.

num = [10, 20, 30];
newnum[1] = 25;

console.log("Bodlogo 16.", newnum);

// Bodlogo 17.

const text1 = ["HTML", "CSS"];
const text2 = ["JavaScript", "React"];

const newText = text1.concat(text2);

console.log("Bodlogo 17.", newText.length);

// Bodlogo 18.
num = [1, 2, 3, 4, 5];
num.splice(3, 3);

console.log("Bodlogo 18.", num);

// Bodlogo 19.
num = [5, 10, 15, 20];
num.splice(2, 1);

console.log("Bodlogo 19.", num);

// Bodlogo 20.

num = ["100", "200", "300"];
includes = num.includes("200");

if (includes) {
  console.log("Bodlogo 20.", "baina");
} else {
  console.log("Bodlogo 20.", "baihgui");
}
