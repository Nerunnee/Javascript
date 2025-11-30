// // // Too taah togloom

// const value = Number(
//   prompt("Тоо таах тоглоом", "Та 1-10 хооронд тоо оруулна уу?")
// );

// // console.log("value", value);

// const randomValue = value;
// const randomNumber = Math.floor(Math.random(value) * 10) + 1;

// // console.log("randomNumber", randomNumber);
// // console.log("randomValue", randomValue);

// function numGuess(n) {
//   if (randomValue < randomNumber) return "Оруулсан утгаас тоо их байна.";
//   if (randomValue > randomNumber) return "Оруулсан утгаас тоо бага байна.";
//   if (randomValue === randomNumber) return "🎉 Баяр хүргэе! Та Зөв таалаа!";
// }

// console.log(numGuess());

// // function numGuess() {
// //   while (randomValue === randomNumber) {
// //     console.log("🎉 Баяр хүргэе! Та Зөв таалаа!");

// //     if (randomValue > randomNumber) {
// //       console.log("Оруулсан утгаас тоо бага байна.");
// //     } else {
// //       console.log("Оруулсан утгаас тоо их байна.");
// //     }
// //   }
// // }

// // numGuess();

// // // if (randomValue < randomNumber) {
// // //   console.log("Тоо их байна.");
// // // } else {
// // //   console.log("Тоо бага байна.");
// // // }

// // // if (randomValue === randomNumber) {
// // //   console.log("Баяр хүргэе! Та Зөв таалаа");
// // // }

// function startGame() {
//   const randomNumber = Math.floor(Math.random() * 10) + 1;
//   const value = Number(prompt("Too oruul"));
//   if (value === "") return false;
//   if (randomNumber > value) {
//     console.log(`${randomNumber} нь ${value}-аас их байна.`);
//     return true;
//   }
//   if (randomNumber < value) {
//     console.log(`${randomNumber} нь ${value}-аас бага байна.`);
//     return true;
//   }
//   if (randomNumber === value) {
//     console.log(`${randomNumber} нь ${value}-аас тэнцүү байна. 🎉 Баяр хүргэе! Та Зөв таалаа!`);
//     return false;
//   }
//   console.log(randomNumber, "random");
//   console.log(value, "value");
// }

// let result = true;
// while (result) {
//   result = startGame();
//   console.log(result);
// }

function startGame() {
  const inputNumber = [];

  const inputString = [];

  // while (true) {
  //   value = Number(prompt("Too oruul"));
  //   if (value === 0) break;
  //   if (randomNumber > value) {
  //     console.log(`${randomNumber} нь ${value}-аас их байна.`);
  //     continue;
  //   }
  //   if (randomNumber < value) {
  //     console.log(`${randomNumber} нь ${value}-аас бага байна.`);
  //     continue;
  //   }
  //   if (randomNumber === value) {
  //     console.log(`${randomNumber} , ${value} тэнцүү байна. 🎉 Баяр хүргэе! Та Зөв таалаа!`);
  //     break;
  //   }
  // }

  for (let i = 1; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    value = Number(prompt("Too oruul"));
    let oroldlogo = i;

    if (value === 0) break;

    if (!value) {
      alert("Та зөвхөн тоо оруулна уу?");
    }

    if (inputNumber.includes(value)) {
      alert("Давтагдсан тоо байна, Та аөр тоо оруулна уу?");
    }

    inputNumber.push(value);

    if (randomNumber > value) {
      console.log(
        `Оролдлого ${oroldlogo}: ${randomNumber} нь ${value}-аас их байна.`
      );
    }

    if (randomNumber < value) {
      console.log(
        `Оролдлого ${oroldlogo}: ${randomNumber} нь ${value}-аас бага байна.`
      );
    }

    if (randomNumber === value) {
      console.log(
        `${randomNumber} , ${value} тэнцүү байна. 🎉 Баяр хүргэе! Та Зөв таалаа! Нийт оролдлого: ${oroldlogo}`
      );
      break;
    }

    if (oroldlogo === 5) {
      alert(
        `Та нийт ${oroldlogo} оролдлого хийснээр тоглоом дууслаа. ☹️ Та дахин оролдоно уу?`
      );
    }
  }

  console.log("Таны нийт оруулсан тоонууд:", inputNumber);
}

startGame();
