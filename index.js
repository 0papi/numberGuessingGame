// initialize variables
let username;
let randomNumber;
let guessedNumber;
let point = 0;
username = prompt("Please enter your username");


// create function
function guessNumber() {
  randomNumber = Math.floor(Math.random() * 2) + 1;
  guessNum = parseFloat(prompt("Please guess a number between 1 and 2"));

  if (randomNumber === guessNum) {
    point = point + 1;
    console.log(`Yaay! ${username} you got this one. You have ${point} point!`);
  } else {
    return alert(
      `Aww sorry ${username} you got it wrong, game is over. Start afresh!`
    );
  }

  //   level two
  randomNumber = Math.floor(Math.random() * 3) + 1;
  guessNum1 = parseFloat(prompt("Please guess a number between 1 and 3"));

  if (randomNumber === guessNum1) {
    point = point + 1;
    console.log(
      `Yaay! ${username} you got this one. You have ${point} points!`
    );
  } else {
    return alert(
      `Aww sorry ${username} you got it wrong, game is over. Start afresh!`
    );
  }

  //   level three
  randomNumber = Math.floor(Math.random() * 4) + 1;
  guessNum2 = parseFloat(prompt("Please guess a number between 1 and 4"));

  if (randomNumber === guessNum2) {
    point = point + 1;
    console.log(
      `Yaay! ${username} you got this one. You have all ${point} points!`
    );
  } else {
    return alert(
      `Aww sorry ${username} you got it wrong, game is over. Start afresh!`
    );
  }
}

// Execute function
guessNumber();