let weekNumber = 7;
let weekName;

if (weekNumber === 1) {
  weekName = "Даваа";
} else if (weekNumber === 2) {
  weekName = "Мягмар";
} else if (weekNumber === 3) {
  weekName = "Лхагва";
} else if (weekNumber === 4) {
  weekName = "Пүрэв";
} else if (weekNumber === 5) {
  weekName = "Баасан";
} else if (weekNumber === 6) {
  weekName = "Бямба";
} else if (weekNumber === 7) {
  weekName = "Ням";
}

console.log(weekName);

switch (weekNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
}
