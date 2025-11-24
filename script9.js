console.log("Loop Bodlogo");

// Bodlogo 1.

x = 10;

for (let i = 0; i <= 10; i++) {
  urvuu = x - i;
  console.log("Bodlogo 1.", urvuu);
}

// Bodlogo 2.

x = 3;

for (let i = 1; i <= 10; i++) {
  urjver = x * i;
  console.log("Bodlogo 2.", x, "x", i, "=", urjver);
}

// Bodlogo 3.

x = 2;

y = 5;

for (let i = 1; i <= y; i++) {
  zereg = x ** i;
}
console.log("Bodlogo 3.", zereg);

// Bodlogo 4.

x = 999;

// too1 = x % 10;
// uldegdelAravt = x % 100;
// too2 = (uldegdelAravt - too1) / 10;
// uldegdelZuut = x % 1000;
// too3 = (uldegdelZuut - uldegdelAravt) / 100;

// sum = too1 + too2 + too3;
// console.log("Bodlogo 4.", sum);

let number = 46784;
let digit;
sum = 0;

for (let i = 0; number > 0; i++) {
  digit = number % 10;
  number = (number - digit) / 10;
  sum = sum + digit;
}
console.log("Bodlogo 4.", sum);

function numberSum(a, b) {
  console.log(a + b);
  return a - b;
}

console.log(numberSum(5, 4));

// Bodlogo 5.

number = 987654967;
count = 0;

for (let i = 0; number > 0; i++) {
  digit = number % 10;
  number = (number - digit) / 10;
  sum = sum + digit;
  count++;
}
console.log("Bodlogo 5.", count);

function degree(n) {
  return n ** 2;
}

console.log(degree(5));
