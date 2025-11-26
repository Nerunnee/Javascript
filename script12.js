// // Too taah togloom

const value = Number(
  prompt("Тоо таах тоглоом", "Та 1-10 хооронд тоо оруулна уу?")
);

// console.log("value", value);

const randomValue = value;
const randomNumber = Math.floor(Math.random(value) * 10) + 1;

// console.log("randomNumber", randomNumber);
// console.log("randomValue", randomValue);

function numGuess(n) {
  if (randomValue < randomNumber) return "Тоо их байна.";
  if (randomValue > randomNumber) return "Тоо бага байна.";
  if (randomValue === randomNumber) return "🎉 Баяр хүргэе! Та Зөв таалаа!";
}

console.log(numGuess());

// // if (randomValue < randomNumber) {
// //   console.log("Тоо их байна.");
// // } else {
// //   console.log("Тоо бага байна.");
// // }

// // if (randomValue === randomNumber) {
// //   console.log("Баяр хүргэе! Та Зөв таалаа");
// // }

// function guessNumberGame() {
//   const random = Math.floor(Math.random() * 10) + 1;
//   const guess = Number(prompt("1-10 хүртэл тоо таагаарай:"));

//   console.log(random);
//   console.log(guess);

//   if (guess === random) {
//     console.log("🎉 Баяр хүргэе! Зөв таалаа!");
//   } else {
//     console.log(`❌ Буруу. Зөв хариу нь ${random} байсан.`);
//   }
// }

// guessNumberGame();
