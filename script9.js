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

// Bodlogo 6.

function degree(n) {
  return n ** 2;
}

console.log("Bodlogo 6.", degree(5));

// Bodlogo 7.

function sumCub(x) {
  sum = 0;
  for (let i = 0; i <= x; i++) {
    sum = sum + i ** 3;
  }
  return sum;
}

console.log("Bodlogo 7.", sumCub(4));

// Bodlogo 8.

function sameDiv(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log("Bodlogo 8.", i);
    }
  }
}

sameDiv(1, 30);

// Bodlogo 9.

function fizzBuzz(i) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Bodlogo 9.", "FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Bodlogo 9.", "Fizz");
  } else if (i % 5 === 0) {
    console.log("Bodlogo 9.", "Buzz");
  }

  return i;
}

fizzBuzz(9);

// Bodlogo 10.

function sevenDiv(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 7 !== 0) {
      console.log("Bodlogo 10.", i);
    }
  }

  return start, end;
}

sevenDiv(1, 100);

// Bodlogo 11.

function five(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0 && i % 5 === 0) {
      console.log("Bodlogo 11.", i);
    }
  }

  return start, end;
}

five(1, 50);

// Bodlogo 12.

function sumHundred(start, end) {
  sum = 0;
  for (let i = start; i <= end; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log("Bodlogo 12.", sumHundred(50, 60));

// Bodlogo 13.

function primeNum(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 1 === 0 && i % i === 0 && i % 2 !== 0) {
      console.log("Bodlogo 13.", i);
    }
  }

  return start, end;
}

primeNum(1, 20);

// Bodlogo 14.

function cubSum(start, end) {
  sum = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      degree = i ** 3;
      sum = sum + degree;
    }
  }

  return sum;
}
console.log("Bodlogo 14.", cubSum(1, 50));

// Bodlogo 15.

function plusHundred(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
      console.log("Bodlogo 15.", i);
    }
  }
}

plusHundred(1, 100);
