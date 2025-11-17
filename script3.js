console.log("Бодлого 3-р хэсэг");

// Бодлого 3.1

hour = 38;
let day = hour / 24;
let uldegdelHour = hour % 24;

console.log("Бодлого 3.1", `${Math.floor(day)} хоног : ${uldegdelHour} цаг`);

// Бодлого 3.2

day = 4;
dayHour = 24;
uldegdelHour = 40;
hour = day * dayHour + uldegdelHour;

console.log("Бодлого 3.2", ` ${hour} цаг`);

// Бодлого 3.1

let month = 106;
let year = month / 12;
let uldegdelMonth = month % 12;

console.log("Бодлого 3.3", `${Math.floor(year)} жил : ${uldegdelMonth} сар`);

// Бодлого 3.4

month = 90 * 12 + 98;

console.log("Бодлого 3.3", ` ${month} сар`);
