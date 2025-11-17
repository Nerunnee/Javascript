console.log("Бодлого 2-р хэсэг");

// Бодлого 2.1.

num = 12;
num *= 3;

console.log("Бодлого 2.1", num);

// Бодлого 2.2.

x = 1;
y = 3;
a = 5;
b = 7;
p = 8.7;

sum = x + y + n + m + p;

console.log("Бодлого 2.2", sum);

// Бодлого 2.3.

x = 10;
y = 5;

let s = x * y;
p = 2 * (x + y);

console.log("Бодлого 2.3", `${s} Талбай : ${p} Периметр`);

// Бодлого 2.4.

let sec = 98;
let min = sec / 60;
// console.log(Math.floor(min), "min");
let uldegdelSecund = sec % 60;
// console.log(uldegdelSecund, "sec");

console.log(
  "Бодлого 2.4",
  `${Math.floor(min)} мин : ${uldegdelSecund} секунд `
);

// Бодлого 2.5.

sec = 1297;
min = sec / 60;
uldegdelSecund = sec % 60;
let realMin = (sec - uldegdelSecund) / 60;
let uldegdelMinut = realMin % 60;
let hour = (realMin - uldegdelMinut) / 60;

console.log(
  "Бодлого 2.5",
  `${hour} цаг : ${Math.floor(uldegdelMinut)} мин : ${uldegdelSecund} секунд `
);

// Бодлого 2.6.

let Secund = 875 * 60 + 88;

console.log("Бодлого 2.6", ` ${Secund} секунд `);

// Бодлого 2.7.

min = 83 * 60 + 84;
Secund = min * 60 + 85;

console.log("Бодлого 2.7", ` ${Secund} секунд `);
