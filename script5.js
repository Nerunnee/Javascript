console.log("Comparison & Conditional bodlogo");

// Bodlogo 1.

let numberOne = 21;
let numberTwo = 25;

if (numberOne > numberTwo) {
  console.log(numberOne, "max");
} else {
  console.log(numberTwo, "max");
}

// Bodlogo 2.

if (numberOne % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// Bodlogo 3.

let numberThree = 10;

if (numberOne > numberTwo && numberOne > numberThree) {
  console.log(numberOne, "max");
}
if (numberTwo > numberThree && numberTwo > numberOne) {
  console.log(numberTwo, "max");
}
if (numberThree > numberOne && numberThree > numberTwo) {
  console.log(numberThree, "max");
}

if (numberOne < numberTwo && numberOne < numberThree) {
  console.log(numberOne, "min");
}
if (numberTwo < numberThree && numberTwo < numberOne) {
  console.log(numberTwo, "min");
}
if (numberThree < numberOne && numberThree < numberTwo) {
  console.log(numberThree, "min");
}

// Bodlogo 4.
const ug = "Hello";

console.log(ug.length);

// Bodlogo 6.

console.log(ug.toUpperCase());

// Bodlogo 8.

a = 20;

if (a % 3 === 0) {
  console.log("fizz");
} else if (a % 5 === 0) {
  console.log("buzz");
} else if (a % 3 === 0 && a % 5 === 0) {
  console.log("fizzbuzz");
}

// Bodlogo 9.

a = "Hello";
b = "World";

console.log(a + b);

// Bodlogo 10.

a = 20;
b = 12;

const avg = (a + b) / 2;

console.log(avg);

// Bodlogo 11.

a = -1;

if (a === 0) {
  console.log("тэг");
} else if (a < 0) {
  console.log("сөрөг");
} else if (a > 0) {
  console.log("эерэг");
}

// Bodlogo 12.

a = 12;

if (a >= 10) {
  console.log("10-aaс их");
} else if (a < 10) {
  console.log("10-aaс бага");
}

// Bodlogo 13.

a = 10;
b = 15;

if (a === b) {
  console.log("тэнцүү");
} else if (a > b) {
  console.log("ялгаатай");
} else if (a < b) {
  console.log("ялгаатай");
}

// Bodlogo 14.

a = 100;

if (a >= 100) {
  console.log("100-аас их");
} else if (a < 0) {
  console.log("0-ээс бага");
} else if (0 <= a && a < 100) {
  console.log("0-100 хоорондох тоо");
}

// Bodlogo 15.

a = 10;
const arvanHuvi = a * 1.1;
const horinHuvi = a * 1.2;
const guchinHuvi = a * 1.3;

console.log(arvanHuvi);
console.log(horinHuvi);
console.log(guchinHuvi);

// Bodlogo 16.

a = 200;

if (a > 100) {
  console.log("100");
} else if (a < 100) {
  console.log(a);
}

// Bodlogo 17.

a = 100;
b = 100;

if (a === b) {
  console.log("ижил");
} else if (a !== b) {
  console.log("өөр");
}

// Bodlogo 18. bolohgui bgaa

x = 25;
a /= Math.floor(x / 10);
b = a % 10;
reversed = b * 10 + a;

console.log(reversed);

// Bodlogo 19.

a = -20;

if (a < 0) a = -a;
{
  console.log(a);
}

// Bodlogo 20.

a = new Date("1970.01.01");
b = new Date("2025.11.18");
const diff = b - a;
sec = diff / 1000;

console.log(sec);

// Bodlogo 21.

a = 1;
b = a % 10;

console.log(b);

// if (a === 0 && a ==== 5) {
//   console.log("5");
// }
