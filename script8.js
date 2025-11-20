// loop bodlogo

// Bodlogo 1.

a = "Pinecone";

console.log("Bodlogo 16", a);

// Bodlogo 2.

a = ["Pinecone"];

for (let i = 0; i < 11; i++) {
  console.log("Bodlogo 2.", a);
}

// Bodlogo 3.

a = ["Pinecone"];

for (let i = 0; i < n; i++) {
  console.log("Bodlogo 3.", a);
}

// Bodlogo 4.

for (let i = 0; i < 21; i++) {
  if (i % 2 !== 0) {
    console.log("Bodlogo 4.", i, "Sondgoi too");
  }
}

// Bodlogo 5.

for (let i = 0; i < 41; i++) {
  if (i % 2 === 0) {
    console.log("Bodlogo 5.", i, "Tegsh too");
  }
}

// Bodlogo 6.

sum = 0;

for (let i = 0; i < 21; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
}

console.log("Bodlogo 6", sum);

// Bodlogo 7.

sum = 0;

for (let i = 0; i < 41; i++) {
  if (i % 2 !== 0) {
    sum = sum + i;
  }
}

console.log("Bodlogo 7", sum);

// Bodlogo 8.

x = 2;

for (let i = 0; i < x; i++) {
  sum = i + 1;
}

// console.log(sum);
// let i = 100;
// while (100 < 100) {
//   console.log("hello");
//   99++;
// }

// for(let i = 101; 101 <= 100; 100++){
//     console.log("hello");
// }

num = 1234;
//1234%10 = 4
//1234 - 4 = 1230
// 1230/10 = 123
//123%10 = 3
//123 - 3 =120

let reverseNum = 0;
while (num > 0) {
  let digits = num % 10;
  console.log(digits, "digits");
  num = (num - digits) / 10;
  console.log(num, "num");

  reverseNum = reverseNum * 10 + digits;
  console.log(reverseNum, "reverse");
}
console.log(reverseNum, "result");
