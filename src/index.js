import { state, tamaState } from "./scripts/state";
let myInterval;
let foodIsActive = false;
let lightsIsActive = false;
let gameIsRunning = false;
let gameTimeCount = 0;
let gameTimeStore = 0;
let playerSelectedChoice = false;
let playerSelection = 0;
let computerSelection = 0;
let playerScore = 0;
let computerScore = 0;
let gameHappy = false;
let gameMad = false;
let gameEnded = false;
let gameAnimateCount = 0;
let healthIsActive = false;
let health2IsActive = false;
let animateCount = 0;
let menuIsOpen = false;
let themeMenuIsOpen = false;
let alertSoundPlayed = false;

/////////////////////////////////////All of Tama's query selections
import {
  alfLogo,
  colorsMenu,
  option1,
  optionsMenu,
  optionsButton,
  color5Button,
  color3Button,
  color2Button,
  color1Button,
  themeMenu,
  themeButton,
  dropDownMenu,
  menuButton,
  button3,
  button2,
  button1,
  deviceButtons,
  tamagotchiContainer,
  hungerMeter,
  gravestoneText,
  gravestoneTwo,
  gravestone,
  snackButton,
  mealButton,
  poop4,
  poop3,
  poop2,
  poop1,
  adult6,
  adult5Sick,
  adult5Eat,
  adult5,
  adult4Lips,
  adult4Sick,
  adult4Eat,
  adult4,
  adult3Sick,
  adult3Eat,
  adult3,
  adult2Lips,
  adult2Sick,
  adult2Eat,
  adult2,
  adult1Sick,
  adult1Eat,
  adult1,
  adultClass,
  teen2Sick,
  teen2Lips,
  teen2Eat,
  teen2,
  teen1Sick,
  teen1Eat,
  teen1,
  teenClass,
  child2Eat,
  child2Side,
  child2Small,
  child2,
  child1Eat,
  child1Side,
  child1Sick,
  child1Low,
  child1,
  childClass,
  characterClass,
  eggClass,
  happyAlert,
  madAlert2,
  madAlert1,
  sickAlert,
  alertButton,
  disciplineButton,
  cleaningLine,
  cleanButton,
  healthScreen2,
  healthScreen,
  healButton,
  gameAdultSix,
  gameAdultFive,
  gameAdultFour,
  gameAdultThree,
  gameAdultTwo,
  gameAdultOne,
  gameTeenTwo,
  gameTeenOne,
  gameChildTwo,
  gameChildOne,
  tamaChoiceTwo,
  tamaChoiceOne,
  playerChoiceTwo,
  playerChoiceOne,
  gameHappyAlert,
  gameMadAlertTwo,
  gameMadAlertOne,
  choiceText,
  playerChoiceDiv,
  gameTimer,
  gameScreen,
  gameButton,
  lightsOff,
  lightsOn,
  lightButton,
  lightsOffScreen,
  lightsScreen,
  healthButton,
  foodScreen,
  helpAttention,
  helpDiscpline,
  healthGif,
  helpHealth,
  poopGif,
  helpClean,
  sickGif,
  helpSick,
  gameGif,
  helpGame,
  lightsGif,
  helpLights,
  foodGif,
  helpEat,
  helpScreen,
  helpMenuButton,
} from "./scripts/tamaImports";

/////////////////////////////////////USEFUL FUNCTIONS
import { randomNumGen, timeMathToSec } from "./scripts/usefulFunctions";

/////////////////////////////////////MOVEMENT FUNCTIONS
import {
  hideImage,
  showImage,
  moveLeftToRightRandom,
  autoRandomFlip,
} from "./scripts/MovmentAnimation";

const body = document.querySelector("body");

function autoAlert() {
  if (state.tamaSick === true) {
    sickAlert.style.visibility = "visible";
  } else {
    sickAlert.style.visibility = "hidden";
  }
}

function placePoop() {
  if (state.tamaPoop === 1) {
    poop1.style.visibility = "visible";
  }

  if (state.tamaPoop === 2) {
    poop1.style.visibility = "visible";

    poop2.style.visibility = "visible";
  }

  if (state.tamaPoop === 3) {
    poop1.style.visibility = "visible";

    poop2.style.visibility = "visible";

    poop3.style.visibility = "visible";
  }

  if (state.tamaPoop === 4) {
    poop1.style.visibility = "visible";

    poop2.style.visibility = "visible";

    poop3.style.visibility = "visible";

    poop4.style.visibility = "visible";
  }

  if (state.tamaPoop === 0) {
    poop1.style.visibility = "hidden";

    poop2.style.visibility = "hidden";

    poop3.style.visibility = "hidden";

    poop4.style.visibility = "hidden";
  }
}

import { updateFood } from "./scripts/FoodFunctions";

import {
  childEatSnackAnimation,
  childTwoEatSnackAnimation,
  teenEatSnackAnimation,
  teenTwoEatSnackAnimation,
  adultOneEatSnackAnimation,
  adultTwoEatSnackAnimation,
  adultThreeEatSnackAnimation,
  adultFourEatSnackAnimation,
  adultFiveEatSnackAnimation,
} from "./scripts/EatingAnimations";

function allEatSnackAnimations() {
  childEatSnackAnimation(state);
  childTwoEatSnackAnimation(state);
  teenEatSnackAnimation(state);
  teenTwoEatSnackAnimation(state);
  adultOneEatSnackAnimation(state);
  adultTwoEatSnackAnimation(state);
  adultThreeEatSnackAnimation(state);
  adultFourEatSnackAnimation(state);
  adultFiveEatSnackAnimation(state);
}

//////////////////////////////// FOOD END

import {
  removeAllChildAndTeen,
  eggHatchAnimation,
} from "./scripts/MiscTamaAnimation";

import { updateHeartSvg, updateDisciplineSvg } from "./scripts/Hearts";

function madAlertAnimate() {
  if (animateCount <= 11 && state.tamaIsMad === true) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      animateCount++;
      hideImage(madAlert2);
      showImage(madAlert1);
    } else {
      animateCount++;
      hideImage(madAlert1);
      showImage(madAlert2);
    }
  } else if (animateCount > 7 && state.tamaIsMad === true) {
    state.tamaIsMad = false;
    animateCount = 0;
    hideImage(madAlert1);
    hideImage(madAlert2);
  }
}

function happyAlertAnimate() {
  if (animateCount <= 5 && state.tamaIsHappy === true) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      animateCount++;
      showImage(happyAlert);
    } else {
      animateCount++;
      hideImage(happyAlert);
    }
  } else if (animateCount > 5 && state.tamaIsHappy === true) {
    state.tamaIsHappy = false;
    animateCount = 0;
    hideImage(happyAlert);
  }
}

function startGame() {
  gameTimer.innerHTML = "0";
  gameTimeCount = 0;
  gameTimeStore = 0;
}

function chooseOneAnimation() {
  if (playerSelectedChoice === false && gameTimeStore <= 29) {
    if (timeMathToSec(state.gameStarted) % 3 === 0) {
      playerChoiceDiv.style.gap = "12px";
      choiceText.innerHTML = "choose";
    } else {
      playerChoiceDiv.style.gap = "24px";
      choiceText.innerHTML = "one";
    }
  } else if (playerSelectedChoice === true && gameTimeStore <= 29) {
    playerChoiceDiv.style.gap = "37.5px";
    choiceText.innerHTML = "";
  } else if (playerSelectedChoice === false && gameTimeStore === 30) {
    playerChoiceDiv.style.gap = "6px";
    choiceText.innerHTML = "times up";
  }
}

function computerGuess() {
  let randomNum = randomNumGen(21);
  if (randomNum <= 10) {
    computerSelection = 1;
  } else {
    computerSelection = 2;
  }
}

function displayFlex(value) {
  value.style.display = "flex";
  return value;
}
function displayHide(value) {
  value.style.display = "none";
  return value;
}

function showGameCharacter() {
  if (state.tamaStage === tamaState[1]) {
    displayFlex(gameChildOne);

    autoRandomFlip(gameChildOne, state);
  } else if (state.tamaStage === tamaState[2]) {
    displayHide(gameChildOne);
    displayFlex(gameChildTwo);
    autoRandomFlip(gameChildTwo, state);
  } else if (state.tamaStage === tamaState[3]) {
    displayHide(gameChildOne);
    displayHide(gameChildTwo);
    displayFlex(gameTeenOne);
  } else if (state.tamaStage === tamaState[4]) {
    displayHide(gameChildOne);
    displayHide(gameChildTwo);
    displayHide(gameTeenOne);
    displayFlex(gameTeenTwo);
  } else if (state.tamaStage === tamaState[5]) {
  } else if (state.tamaStage === tamaState[6]) {
  } else if (state.tamaStage === tamaState[7]) {
    displayHide(gameChildOne);
    displayHide(gameChildTwo);
    displayHide(gameTeenOne);
    displayHide(gameTeenTwo);
    displayFlex(gameAdultOne);
  } else if (state.tamaStage === tamaState[8]) {
    displayHide(gameChildOne);
    displayHide(gameChildTwo);
    displayHide(gameTeenOne);
    displayHide(gameTeenTwo);
    displayFlex(gameAdultTwo);
  } else if (state.tamaStage === tamaState[9]) {
    displayHide(gameChildOne);
    displayHide(gameChildTwo);
    displayHide(gameTeenOne);
    displayHide(gameTeenTwo);
    displayFlex(gameAdultThree);
  } else if (state.tamaStage === tamaState[10]) {
    displayHide(gameChildOne);
    displayHide(gameChildTwo);
    displayHide(gameTeenOne);
    displayHide(gameTeenTwo);
    displayFlex(gameAdultFour);
  }
}

function characterMadEmoteAnimations() {
  if (gameMad != false && gameAnimateCount < 5) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      displayHide(gameMadAlertTwo);
      displayFlex(gameMadAlertOne);
      gameAnimateCount++;
    } else {
      displayHide(gameMadAlertOne);
      displayFlex(gameMadAlertTwo);
      gameAnimateCount++;
    }
  } else {
    gameMad = false;
    gameHappy = false;
    gameAnimateCount = 0;
    displayHide(gameMadAlertTwo);
    displayHide(gameMadAlertOne);
  }
}
function characterHappyEmoteAnimations() {
  if (gameHappy != false && gameAnimateCount < 5) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      displayFlex(gameHappyAlert);
      gameAnimateCount++;
    } else {
      displayHide(gameHappyAlert);
      gameAnimateCount++;
    }
  } else {
    gameHappy = false;
    gameMad = false;
    gameAnimateCount = 0;
    displayHide(gameHappyAlert);
  }
}

// let gameIsRunning = false;
// let gameRound = 0;
// let gameTimeCount = 0;
// let gameTimeStore = 0;
// let lastGuessTime;
// let playerSelectedChoice = false;
// let playerSelection = 0;
// let computerSelection = 0;
// let playerScore = 0;
// let computerScore = 0;
// let gameHappy = false;
// let gameMad = false;
// let gameAnimateCount = 0;

function quitGame() {
  if (gameEnded != false) {
    gameHappy = false;
    gameMad = false;
    gameAnimateCount = 0;
    gameIsRunning = false;
    gameRound = 0;
    gameTimeCount = 0;
    gameTimeStore = 0;
    playerSelectedChoice = false;
    playerSelection = 0;
    computerSelection = 0;
    playerScore = 0;
    computerScore = 0;
    hideImage(gameScreen);
  }
}

function updateScoreView() {
  if (playerSelection === 1 && computerSelection === 1) {
    tamaChoiceOne.style.backgroundColor = "green";
    playerChoiceOne.style.backgroundColor = "green";
    gameHappy = true;
  } else if (playerSelection === 2 && computerSelection === 2) {
    tamaChoiceTwo.style.backgroundColor = "green";
    playerChoiceTwo.style.backgroundColor = "green";
    gameHappy = true;
  } else if (playerSelection === 1 && computerSelection === 2) {
    tamaChoiceTwo.style.backgroundColor = "maroon";
    playerChoiceOne.style.backgroundColor = "maroon";
    gameMad = true;
  } else if (playerSelection === 2 && computerSelection === 1) {
    tamaChoiceOne.style.backgroundColor = "maroon";
    playerChoiceTwo.style.backgroundColor = "maroon";
    gameMad = true;
  } else if (playerSelection === 0) {
    tamaChoiceOne.style.backgroundColor = "transparent";
    tamaChoiceTwo.style.backgroundColor = "transparent";
    playerChoiceOne.style.backgroundColor = "transparent";
    playerChoiceTwo.style.backgroundColor = "transparent";
  }
}

function updateScore() {
  if (playerSelection === computerSelection) {
    playerScore++;
  } else {
    computerScore++;
  }
}

function updateGameTimerAndRestart() {
  if (gameTimeCount <= 24) {
    gameTimeCount++;
    if (gameTimeCount % 3 === 0 && gameTimeStore < 30) {
      gameTimeStore++;
      gameTimer.innerHTML = `${gameTimeStore}`;
    }
  } else if (gameTimeCount > 24) {
    gameRound++;
    playerSelectedChoice = false;
    playerSelection = 0;
    gameTimeCount = 0;
    gameTimeStore = 0;
  }
}
function scoreAutoQuit() {
  if (playerScore > 2) {
    gameEnded = true;
    state.tamaHappy++;
    state.tamaIsHappy = true;
  } else if (computerScore > 2) {
    gameEnded = true;
  }
}

function updateAndPlayGameAnimations() {
  if (gameIsRunning != false) {
    updateGameTimerAndRestart();
    chooseOneAnimation();
    updateScoreView();
    showGameCharacter();
    characterMadEmoteAnimations();
    characterHappyEmoteAnimations();
    quitGame();
    scoreAutoQuit();
  }
}

function autoTheme(background, tamagotchi, button, buttonBorder) {
  body.style.backgroundColor = background;
  body.style.background = background;
  tamagotchiContainer.style.backgroundColor = tamagotchi;
  tamagotchiContainer.style.background = tamagotchi;
  dropDownMenu.style.backgroundColor = tamagotchi;
  dropDownMenu.style.background = tamagotchi;

  button1.style.backgroundColor = button;
  button2.style.backgroundColor = button;
  button3.style.backgroundColor = button;
  menuButton.style.backgroundColor = button;

  button1.style.borderColor = buttonBorder;
  button2.style.borderColor = buttonBorder;
  button3.style.borderColor = buttonBorder;
  menuButton.style.borderColor = buttonBorder;
}

const planetExpressLogo = document.querySelector("#express-logo");

function updateTheme() {
  if (state.tamaTheme === 0) {
    displayFlex(planetExpressLogo);
    displayHide(alfLogo);
    autoTheme(
      "var(--greenBackground)",
      "var(--mintGreen)",
      "var(--redButton)",
      "var(--darkerRedButton)"
    );
  } else if (state.tamaTheme === 1) {
    displayHide(planetExpressLogo);
    displayHide(alfLogo);
    autoTheme(
      "var(--yellowBackground)",
      "var(--lightYellow)",
      "var(--purpleButton)",
      "var(--darkerPurpleButton)"
    );
  } else if (state.tamaTheme === 2) {
    displayHide(planetExpressLogo);
    displayHide(alfLogo);
    autoTheme(
      "var(--whiteBackground)",
      "var(--offWhite)",
      "var(--blackButton)",
      "var(--darkerBlackButton)"
    );
    dropDownMenu.style.backgroundColor = "var(--offWhiteMenu)";
  } else if (state.tamaTheme === 3) {
    displayHide(planetExpressLogo);
    displayHide(alfLogo);
    autoTheme(
      "var(--blueBackground)",
      "var(--myBlueAndRed)",
      "var(--blackButton)",
      "var(--darkerBlackButton)"
    );
  } else if (state.tamaTheme === 4) {
    displayHide(planetExpressLogo);
    displayFlex(alfLogo);
    autoTheme(
      "var(--alfBackground)",
      "var(--alf)",
      "var(--alfButton)",
      "var(--darkerAlfButton)"
    );
  }
}

function childOneSickAnimation() {
  if (state.tamaStage === tamaState[1] && state.tamaSick === true) {
    eggClass.style.visibility = "hidden";
    child1Sick.style.visibility = "hidden";
    child1Low.style.visibility = "visible";
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      let randomChoice = randomNumGen(5);
      if (randomChoice === 3) {
        child1Low.style.visibility = "hidden";
        child1Sick.style.visibility = "visible";
      } else {
        child1Sick.style.visibility = "hidden";
        child1Low.style.visibility = "visible";
      }
    }
  }
}
function childOneMovement() {
  if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
    let randomChoice = randomNumGen(4);
    if (randomChoice === 3) {
      child1.style.visibility = "hidden";
      child1Low.style.visibility = "visible";
      moveLeftToRightRandom(child1Low, state);
    } else {
      child1Low.style.visibility = "hidden";
      child1.style.visibility = "visible";
      moveLeftToRightRandom(child1, state);
    }
  }
}

function updateChracterPicture() {
  if (state.tamaDead || state.foodAnimationGoing || gameIsRunning) {
    return;
  }

  // childOneSickAnimation();
  if (state.tamaStage === tamaState[1] && state.tamaSick === false) {
    eggClass.style.visibility = "hidden";

    child1Low.style.visibility = "hidden";

    child1.style.visibility = "visible";

    childOneMovement();

    moveLeftToRightRandom(child1, state);
  }

  if (state.tamaStage === tamaState[2]) {
    child1.style.visibility = "hidden";

    child1Low.style.visibility = "hidden";

    child1Sick.style.visibility = "hidden";

    child2.style.visibility = "visible";

    moveLeftToRightRandom(child2, state);
  }

  if (state.tamaStage === tamaState[3]) {
    child2.style.visibility = "hidden";

    teen1.style.visibility = "visible";

    autoRandomFlip(teen1, state);

    moveLeftToRightRandom(teen1, state);
  }

  if (state.tamaStage === tamaState[4]) {
    child2.style.visibility = "hidden";

    teen2.style.visibility = "visible";

    autoRandomFlip(teen2, state);

    moveLeftToRightRandom(teen2, state);
  }

  // SPECIAL CHARACTERS
  if (state.tamaStage === tamaState[5]) {
    removeAllChildAndTeen();

    adult5.style.visibility = "visible";

    autoRandomFlip(adult5, state);

    moveLeftToRightRandom(adult5, state);
  }
  if (state.tamaStage === tamaState[6]) {
    removeAllChildAndTeen();

    adult6.style.visibility = "visible";

    autoRandomFlip(adult6, state);

    moveLeftToRightRandom(adult6, state);
  }

  if (state.tamaStage === tamaState[7]) {
    removeAllChildAndTeen();

    adult1.style.visibility = "visible";

    autoRandomFlip(adult1, state);

    moveLeftToRightRandom(adult1, state);
  }

  if (state.tamaStage === tamaState[8]) {
    removeAllChildAndTeen();

    adult2.style.visibility = "visible";

    autoRandomFlip(adult2, state);

    moveLeftToRightRandom(adult2, state);
  }

  if (state.tamaStage === tamaState[9]) {
    removeAllChildAndTeen();

    adult3.style.visibility = "visible";

    autoRandomFlip(adult3, state);

    moveLeftToRightRandom(adult3, state);
  }

  if (state.tamaStage === tamaState[10]) {
    removeAllChildAndTeen();

    adult4.style.visibility = "visible";

    autoRandomFlip(adult4, state);

    moveLeftToRightRandom(adult4, state);
  }

  if (state.tamaStage === tamaState[13]) {
    gravestone.style.visibility = "visible";
  }
}

function showGravestone() {
  if (state.tamaDead === true) {
    state.tamaStage = tamaState[13];
    hideImage(poop1);
    hideImage(poop2);
    hideImage(poop3);
    hideImage(poop4);
    childClass.style.visibility = "hidden";
    teenClass.style.visibility = "hidden";
    adultClass.style.visibility = "hidden";
    adult1.style.visibility = "hidden";
    adult2.style.visibility = "hidden";
    adult3.style.visibility = "hidden";
    adult4.style.visibility = "hidden";
    adult5.style.visibility = "hidden";
    adult6.style.visibility = "hidden";
    if (timeMathToSec(state.timeState.lastAnimation) % 2 === 0) {
      displayFlex(gravestoneText);
      gravestoneText.innerHTML = `${state.tamaAge} Years`;
      displayHide(gravestone);
      displayFlex(gravestoneTwo);
    } else {
      displayFlex(gravestoneText);
      gravestoneText.innerHTML = `${state.tamaAge} Years`;
      displayHide(gravestoneTwo);
      displayFlex(gravestone);
    }
  }
}

function startAnimation() {
  myInterval = setInterval(updatePictures, 400);
  state.gameStarted = true;
  state.tamaDead = false;
  state.timeState.gameStart = new Date();
}

function updatePictures() {
  updateTheme();
  happyAlertAnimate();
  madAlertAnimate();
  updateFood(state);
  placePoop();
  autoAlert();
  eggHatchAnimation(state);
  allEatSnackAnimations();
  updateHeartSvg(state);
  updateDisciplineSvg(state);
  updateChracterPicture();
  showGravestone();
  updateAndPlayGameAnimations();
}
startAnimation();

// function autoDeath() {
//   if (
//     //cant die as an egg or stage one child
//     (state.tamaStage === tamaState[1] || state.tamaStage === tamaState[0]) &&
//     state.tamaHealth === 0
//   ) {
//     state.tamaHealth = 1;
//   } else if (state.tamaHealth == 0) {
//     stop();
//     state.tamaStage = tamaState[13];
//     state.tamaDead = true;
//   }
// }

function givePoop() {
  let randomNum = randomNumGen(1000);
  if (state.tamaPoop == 4) {
    //cant poop anymore
  } else if (state.tamaSick == true) {
    if (timeMathToSec(state.timeState.lastPoop) % 10 == 0) {
      if (
        //25.5%: 255/1000 - every 10 sec if sick
        (randomNum <= 10 && randomNum >= 95) ||
        (randomNum <= 510 && randomNum >= 595) ||
        (randomNum <= 800 && randomNum >= 885)
      ) {
        state.tamaPoop++;
        state.timeState.lastPoop = new Date();
      }
    }
  } else {
    //normally
    if (timeMathToSec(state.timeState.lastPoop) % 30 == 0) {
      if (
        //10.5%: 105/1000
        (randomNum >= 10 && randomNum <= 45) ||
        (randomNum >= 400 && randomNum <= 435) ||
        (randomNum >= 900 && randomNum <= 935)
      ) {
        state.tamaPoop++;
        state.timeState.lastPoop = new Date();
        let randomNum2 = randomNumGen(4);
        if (randomNum2 == 2) {
          //25%: 1/4
          state.tamaHealth--;
        } else {
        }
      }
    }
  }

  if (state.tamaPoop === 0) {
  }
}

/////////////////////////////////////AUTO DEGENERATION FUNCTIONS
function autoHealthDegen() {
  let randomNum = randomNumGen(2500);
  if (
    timeMathToSec(state.timeState.gameStart) % 10 == 0 &&
    timeMathToSec(state.timeState.lastHealth) > 11
  ) {
    //every 5 seconds check
    if (state.tamaHappy <= 2) {
      // if not happy
      if (
        //15% chance to loose health 200/3000
        (randomNum >= 10 && randomNum <= 70) ||
        (randomNum >= 900 && randomNum <= 970) ||
        (randomNum >= 2300 && randomNum <= 2370)
      ) {
        state.tamaHealth -= 1;
        state.timeState.lastHealth = new Date();
      }
    } else {
      //NORMAL HEALTH DEGEN
      if (
        //3% chance to loose health 90/3000
        (randomNum >= 10 && randomNum <= 69) ||
        (randomNum >= 880 && randomNum <= 930) ||
        (randomNum >= 2280 && randomNum <= 2330)
      ) {
        state.tamaHealth -= 1;
        state.timeState.lastHealth = new Date();
      }
    }
  }
}
function autoHappyDegen() {
  let randomNum = randomNumGen(3000);
  if (timeMathToSec(state.timeState.gameStart) % 5 == 0) {
    //every 5 seconds run
    if (state.tamaHealth <= 2) {
      //if health 2 MORE HAPPY DEGEN
      //15% percent
      if (
        (randomNum >= 100 && randomNum <= 160) ||
        (randomNum >= 1200 && randomNum <= 1280) ||
        (randomNum >= 2800 && randomNum <= 2880)
      ) {
        state.tamaHappy -= 1;
        state.timeState.lastHappy = new Date();
      }
    } else {
      //NORMAL HEAPPY DEGEN
      //3% percent 90/3000
      if (
        (randomNum >= 50 && randomNum <= 80) ||
        (randomNum >= 1600 && randomNum <= 1630) ||
        (randomNum >= 2200 && randomNum <= 2230)
      ) {
        state.tamaHappy -= 1;
        state.timeState.lastHappy = new Date();
      }
    }
  }
}

function getSick() {
  let randomNumber = randomNumGen(4000);

  if (state.tamaPoop == 4) {
    if (timeMathToSec(state.timeState.lastPoop) > 15) {
      //if 6 poop for 15 sec get sick
      state.tamaSick = true;
      state.timeState.lastSick = new Date();
    }
  }

  if (
    timeMathToSec(state.timeState.lastSick) > 60 ||
    state.timeState.lastSick == state.timeState.gameStart
  ) {
    //cant get sick 2 min after getting sick
    if (randomNumber == 8 || randomNumber == 573 || randomNumber == 1362) {
      state.tamaSick = true;
      state.timeState.lastSick = new Date();
    }
  } else {
    //no poop
  }
}

function ifSick() {
  if (state.tamaSick == true) {
    if (timeMathToSec(state.timeState.lastSick) % 15 == 0) {
      state.tamaHealth -= 0.5;
    }
  }
}

/////////////////////////////////////GAME FUNCTIONS
function feed(type) {
  //1 == meal && 2 == snack
  if (type == 1 && state.tamaHealth < 5) {
    state.tamaHealth++;
  } else if (type == 2 && state.tamaHealth < 5) {
    if (state.tamaHappy < 5) {
      state.tamaHappy = state.tamaHappy + 1;
    }
  } else if (type == 2) {
    state.tamaHealth = state.tamaHealth + 0;
    if (state.tamaHappy < 5) {
      state.tamaHappy = state.tamaHappy + 1;
    }
  }
  if (state.tamaHealth >= 5) {
    state.tamaHealth += 0;
  }
  if (type == 2 && state.tamaHealth >= 5) {
    state.tamaHealth = 5;
  } else if (type == 1 && state.tamaHealth >= 5) {
    state.tamaHealth = 5;
    console.log("tamagotchi is full");
  }
}

function heal() {
  state.tamaSick = false;
  state.tamaHappy -= 1;
}

function clean() {
  if (state.tamaPoop == 0) {
  } else {
    state.tamaPoop = 0;
    state.tamaHappy++;
  }
}

// function playGame() {
//   let score = 0;
//   for (let i = 0; i < 5; i++) {
//     let compChoice = randomNumGen(2);
//     let playerChoice = prompt("Best out of 3: 0 or 1");
//     if (playerChoice == 8) {
//       state.tamaHappy++;
//       break;
//     }
//     if (playerChoice == compChoice) {
//       alert("nice you got it!");
//       score++;
//     } else {
//       alert("woops they chose" + compChoice);
//     }
//     if (score > 2) {
//       break;
//     }
//   }
//   if (score > 2) {
//     alert("you won!!! +1 happy");
//     state.tamaHappy = state.tamaHappy + 1;
//   } else {
//     alert("you lost! try again no happy gained");
//   }
//   if (state.tamaHappy == 5 || state.tamaHappy > 5) {
//     state.tamaHappy = 5;
//   }
// }

function autoAttentionAlert() {
  if (state.needAttention != true) {
    if (state.tamaDead == true) {
      hungerMeter.textContent = "im ded";
    } else if (state.tamaStage === tamaState[0]) {
      hungerMeter.textContent = "egg";
    } else if (state.tamaNeglect >= 8) {
      //doesnt tell you when its actually hungry
    } else {
      if (state.tamaHappy <= 2 && state.tamaHealth <= 2) {
        alertButton.style.backgroundColor = "red";
        // hungerMeter.textContent = "im not happy and hungry";
      } else if (state.tamaHappy <= 2) {
        alertButton.style.backgroundColor = "red";
        // hungerMeter.textContent = "im not happy";
      } else if (state.tamaHealth <= 2) {
        alertButton.style.backgroundColor = "red";
        // hungerMeter.textContent = "im hungry";
      } else if (state.tamaHappy > 2) {
        alertButton.style.backgroundColor = "green";
        // hungerMeter.textContent = "";
      } else if (state.tamaHealth >= 2) {
        alertButton.style.backgroundColor = "green";
        // hungerMeter.textContent = "";
      }
    }
  }
}

function autoDisciplineTest() {
  //make a noise when full (if dont disicpline increses spoil meter by one
  if (state.tamaHappy >= 5 && state.tamaHealth >= 5) {
    //only happen if full happy and health
    if (
      state.tamaStage == tamaState[1] ||
      state.tamaStage == tamaState[2] ||
      state.tamaStage == tamaState[3] ||
      state.tamaStage == tamaState[4]
    ) {
      //only happen when in teen state
      if (state.tamaDiscipline == 5) {
        //if disciplined dont happen
      } else if (state.tamaDiscipline < 3) {
        if (timeMathToSec(state.timeState.lastComplain) > 60) {
          //only chance to happen 30 min after last happened
          let randomNum = randomNumGen(100);
          if (randomNum >= 50 && randomNum <= 58) {
            //make an attention call
            state.needAttention = true;
            state.timeState.lastComplain = new Date();
          }
        }
        //alert stays for 2 minutes
        if (
          state.needAttention == true &&
          timeMathToSec(state.timeState.lastComplain) < 30
        ) {
          alertSoundPlayed = true;
          alertButton.style.backgroundColor = "red";
        } else {
          alertButton.style.backgroundColor = "green";
          state.needAttention = false;
          if (randomNumGen(5) === 2) {
            state.tamaNeglect++;
          }
        }
      }
    }
  }
}

function spoiledAdultAttention() {
  if (
    state.tamaSpoiled >= 7 &&
    (state.tamaStage == tamaState[4] ||
      state.tamaStage == tamaState[5] ||
      state.tamaStage == tamaState[6] ||
      state.tamaStage == tamaState[7] ||
      state.tamaStage == tamaState[8] ||
      state.tamaStage == tamaState[9] ||
      state.tamaStage == tamaState[10] ||
      state.tamaStage == tamaState[11])
  ) {
    if (timeMathToSec(state.timeState.lastComplain) > 60) {
      //only chance to happen 30 min after last happened
      let randomNum = randomNumGen(200);
      if (randomNum >= 40 && randomNum <= 50) {
        //make an attention call
        state.needAttention = true;
        state.timeState.lastComplain = new Date();
      }
    }
    //alert stays for 30 seconds
    if (
      state.needAttention == true &&
      timeMathToSec(state.timeState.lastComplain) < 30
    ) {
      attentionText.textContent = " i want attention";
    } else {
      attentionText.textContent = "";
      state.needAttention = false;
    }
  }
}

function letThereBeLife() {
  if (timeMathToSec(state.timeState.gameStart) < 10) {
    state.tamaStage = tamaState[1];
  }
}

function eggHatch() {
  // if (not hatched) {
  //   give random chance every 30 sec to
  //   add a increase in hatching stage
  //   if doesnt increase in 10 min add a increase (every 10 min)
  //   if hatching stage to 3 go to eggToBaby
  // }
  if (
    state.tamaStage == tamaState[0] && //if egg and 20 seconds has passed
    state.tamaHatch < 3 &&
    timeMathToSec(state.timeState.gameStart) > 2
  ) {
    if (timeMathToSec(state.timeState.gameStart) % 2 == 0) {
      //every 2 seconds have a chance to hatch
      let randomNum = randomNumGen(500);
      if (
        (randomNum >= 100 && randomNum <= 180) ||
        (randomNum >= 300 && randomNum <= 310)
      ) {
        if (state.tamaHatch != 3) {
          state.tamaHatch++;
        }
      }
    }
  }
  if (state.tamaHatch == 3) {
    state.timeState.lastHatchCycle = new Date();
    state.tamaHatch = 4;
  }
}

function eggToBaby() {
  //first KID evolve
  if (
    state.tamaStage == tamaState[0] && //if stil egg
    state.tamaHatch == 4 && //and egg is at hatch level 3
    timeMathToSec(state.timeState.lastHatchCycle) > 10 &&
    timeMathToSec(state.timeState.lastHatchCycle) < 120 //2 min
  ) {
    if (timeMathToSec(state.timeState.gameStart) % 2 == 0) {
      let randomNum = randomNumGen(100);
      if (randomNum >= 75 && randomNum <= 80) {
        //5% chance every 4 sec to hatch early
        state.tamaStage = tamaState[1];
        state.tamaName = state.tamaStage;
        state.timeState.lastEvolve = new Date();
      }
    }
  } else if (
    state.tamaStage == tamaState[0] &&
    timeMathToSec(state.timeState.lastHatchCycle) > 120 //2 min
  ) {
    //100% chance to hatch
    state.tamaStage = tamaState[1];
    state.timeState.lastEvolve = new Date();
  }

  //second KID evolve
  if (
    state.tamaStage == tamaState[1] &&
    timeMathToSec(state.timeState.lastEvolve) > 10 &&
    timeMathToSec(state.timeState.lastEvolve) < 120 &&
    state.foodAnimationGoing != true
  ) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      let randomNum = randomNumGen(500);
      if (randomNum >= 35 && randomNum <= 45) {
        state.tamaStage = tamaState[2];
        state.timeState.lastEvolve = new Date();
      }
    }
  } else if (
    state.tamaStage === tamaState[1] &&
    timeMathToSec(state.timeState.lastEvolve) > 120
  ) {
    state.tamaStage = tamaState[2];
    state.timeState.lastEvolve = new Date();
  }
}

function babyToTeen() {
  //BABY TO TEEN
  if (
    state.tamaStage == tamaState[2] &&
    timeMathToSec(state.timeState.lastEvolve) >= 60 && //10 min
    state.foodAnimationGoing != true
  ) {
    //1% percent chance to grow early every 60 seconds
    if (timeMathToSec(state.gameStarted) % 30 == 0) {
      let randomNum = randomNumGen(2);
      if (randomNum === 0) {
        state.tamaStage = tamaState[3];
      } else {
        state.tamaStage = tamaState[4];
      }
    }
  } else if (
    state.tamaStage == tamaState[2] &&
    timeMathToSec(state.timeState.lastEvolve > 43200) //.5 day
  ) {
    //10% every 60 seconds
    if (timeMathToSec(state.gameStarted) % 60 == 0) {
      let randomNum = randomNumGen(2);
      if (randomNum === 0) {
        state.tamaStage = tamaState[3];
      } else {
        state.tamaStage = tamaState[4];
      }
    }
  } else if (
    state.tamaStage == tamaState[2] &&
    timeMathToSec(state.timeState.lastEvolve > 86400) //1 day
  ) {
    //grow up no matter what
    let randomNum = randomNumGen(2);
    if (randomNum === 0) {
      state.tamaStage = tamaState[3];
    } else {
      state.tamaStage = tamaState[4];
    }
  }
}

function teenToAdult() {
  if (
    (state.tamaStage == tamaState[3] || state.tamaStage == tamaState[4]) &&
    timeMathToSec(state.timeState.lastEvolve) > 20 //60 min
  ) {
    if (timeMathToSec(state.timeState.gameStart) % 2 == 0) {
      //1 % chance every 30 seconds to grow up early
      let randomNum = randomNumGen(100);
      if (randomNum > 46) {
        let teenChoice = randomNumGen(100);
        if (teenChoice >= 0 && teenChoice <= 23) {
          state.tamaStage = tamaState[7];
        } else if (teenChoice >= 24 && teenChoice <= 47) {
          state.tamaStage = tamaState[8];
        } else if (teenChoice >= 48 && teenChoice <= 71) {
          state.tamaStage = tamaState[9];
        } else if (teenChoice >= 72 && teenChoice <= 95) {
          //24%
          state.tamaStage = tamaState[10];
        } else if (teenChoice >= 96) {
          //4% - SECRET CHARACTER
          if (state.tamaStage == tamaState[3]) {
            state.tamaStage = tamaState[5]; //secret characters for that character
          } else if (state.tamaStage == tamaState[4]) {
            state.tamaStage = tamaState[6]; //secret characters for that character
          }
        }
      }
    }
  }
}

function secretAdultToSpecial() {
  //make it so
}

function autoDeath() {
  if (
    //cant die as an egg or stage one child
    (state.tamaStage === tamaState[1] || state.tamaStage === tamaState[0]) &&
    state.tamaHealth === 0
  ) {
    state.tamaHealth = 1;
  } else if (state.tamaHealth == 0) {
    state.tamaStage = tamaState[13];
    stop();
    state.tamaDead = true;
  }
}

function autoAge() {
  if (timeMathToSec(state.timeState.gameStart) % 86400 == 0) {
    //1 DAY
    state.tamaAge++;
    console.log(tamaState);
  }
  letThereBeLife();
  eggHatch();
  eggToBaby();
  babyToTeen();
  teenToAdult();
  autoDeath();
}

function playGame() {
  if (gameIsRunning != false) {
    if (gameTimeStore < 8) {
      console.log("game running");
    } else if (gameTimeStore === 8) {
      playerSelectedChoice = false;
      playerSelection = 0;
      gameTimeStore = 0;
      console.log("game ended");
    }
  }
}

//i cant make it so it only plays once in the loop. its very annoying
function playAlertSound() {
  let alertSound = new Audio("../src/tamaPictures/alert.wav");
  if (alertSoundPlayed === true) {
    alertSound.play();
  }
  setInterval(function () {
    alertSound.pause();
    alertSoundPlayed = false;
  }, 400);
}

/////////////////////////////////////RUNNING THE GAME
function updateFunctions() {
  if (state.tamaStage == tamaState[0]) {
  } else {
    getSick();
    givePoop();
    ifSick();
    autoHealthDegen();
    autoHappyDegen();
    autoDisciplineTest();
    playGame();
  }
  autoAge();
  autoAttentionAlert();
  spoiledAdultAttention();
}

function start() {
  myInterval = setInterval(gameLoop, 1000);
  state.gameStarted = true;
  state.tamaDead = false;
  state.timeState.gameStart = new Date();
}

function stop() {
  clearInterval(myInterval);
  state.gameStarted = false;
}

function ifStarted() {
  if (state.gameStarted == true) {
    start();
  }
}

function gameLoop() {
  updateFunctions();
}
start();

function hideAllExtraScreens() {
  hideImage(foodScreen);
  foodIsActive = false;
  hideImage(lightsScreen);
  lightsIsActive = false;
  quitGame();
  gameEnded = true;
  hideImage(healthScreen);
  healthIsActive = false;
  hideImage(healthScreen2);
  health2IsActive = false;
}

foodButton.addEventListener("click", function () {
  if (state.foodAnimationGoing != true) {
    if (state.tamaIsMad != true) {
      if (lightsIsActive === true) {
        hideAllExtraScreens();
        showImage(foodScreen);
        foodIsActive = true;
      } else if (gameIsRunning === true) {
        hideAllExtraScreens();
        showImage(foodScreen);
        foodIsActive = true;
      } else if (healthIsActive === true) {
        hideAllExtraScreens();
        foodScreen.style.visibility = "visible";
        foodIsActive = true;
      } else if (foodIsActive === false) {
        foodScreen.style.visibility = "visible";
        foodIsActive = true;
      } else if (foodIsActive === true) {
        foodScreen.style.visibility = "hidden";
        foodIsActive = false;
      }
    }
  }
});

mealButton.addEventListener("click", function () {
  if (state.tamaHealth < 5) {
    state.foodAnimationGoing = true;
    feed(1);
    allEatSnackAnimations();
  }
  hideAllExtraScreens();
});

// if (state.needAttention === true) {
//     state.tamaIsMad = true;
//     state.needAttention = false;
//     state.tamaDiscipline++;
// } else {
//     state.tamaIsMad = true;
// }

snackButton.addEventListener("click", function () {
  if (state.tamaHappy <= 5) {
    state.foodAnimationGoing = true;
    feed(2);
    allEatSnackAnimations();
    if (state.needAttention === true) {
      state.needAttention = false;
      state.tamaSpoiled++;
    }
  }
  hideAllExtraScreens();
});

lightButton.addEventListener("click", function () {
  if (state.foodAnimationGoing != true) {
    if (foodIsActive === true) {
      hideAllExtraScreens();
      showImage(lightsScreen);
      lightsIsActive = true;
    } else if (gameIsRunning === true) {
      hideAllExtraScreens();
      showImage(lightsScreen);
      lightsIsActive = true;
    } else if (healthIsActive === true || health2IsActive === true) {
      hideAllExtraScreens();
      showImage(lightsScreen);
      lightsIsActive = true;
    } else if (state.lightIsOff === true && lightsIsActive === false) {
      hideImage(lightsOffScreen);
      showImage(lightsScreen);
      lightsIsActive = true;
    } else if (state.lightIsOff === true && lightsIsActive === true) {
      hideImage(lightsScreen);
      showImage(lightsOffScreen);
      lightsIsActive = false;
    } else if (lightsIsActive === false) {
      lightsScreen.style.visibility = "visible";
      lightsIsActive = true;
    } else if (lightsIsActive === true) {
      lightsScreen.style.visibility = "hidden";
      lightsIsActive = false;
    }
  }
});
lightsOn.addEventListener("click", function () {
  hideImage(lightsScreen);
  lightsIsActive = false;
  hideImage(lightsOffScreen);
  state.lightIsOff = false;
  console.log(state.lightIsOff);
});
lightsOff.addEventListener("click", function () {
  state.lightIsOff = true;
  hideImage(lightsScreen);
  lightsIsActive = false;
  showImage(lightsOffScreen);
  console.log(state.lightIsOff);
});

gameButton.addEventListener("click", function () {
  if (state.tamaIsMad != true) {
    hideAllExtraScreens();
    if (foodIsActive === true) {
      hideAllExtraScreens();
      removeAllChildAndTeen();
      showImage(gameScreen);
      gameIsRunning = true;
    } else if (gameIsRunning === false) {
      gameEnded = false;
      gameIsRunning = true;
      removeAllChildAndTeen();
      showImage(gameScreen);
    } else if (gameIsRunning === true) {
      gameEnded = true;
    }
  }
});
playerChoiceOne.addEventListener("click", function () {
  if (playerSelectedChoice != true) {
    playerSelectedChoice = true;
    playerSelection = 1;
    gameTimeStore = 6;
    computerGuess();
    updateScore();
    lastGuessTime = new Date();
  }
});
playerChoiceTwo.addEventListener("click", function () {
  if (playerSelectedChoice != true) {
    playerSelectedChoice = true;
    playerSelection = 2;
    gameTimeStore = 6;
    computerGuess();
    updateScore();
    lastGuessTime = new Date();
  }
});

healButton.addEventListener("click", function () {
  hideAllExtraScreens();
  if (state.tamaIsMad != true) {
    if (state.tamaSick === true) {
      heal();
      state.tamaIsMad = true;
    } else {
      state.tamaIsMad = true;
    }
  }
});

healthButton.addEventListener("click", function () {
  if (state.foodAnimationGoing != true) {
    if (foodIsActive === true) {
      hideAllExtraScreens();
      healthScreen.style.visibility = "visible";
      healthIsActive = true;
    } else if (lightsIsActive === true) {
      hideAllExtraScreens();
      showImage(healthScreen);
      healthIsActive = true;
    } else if (gameIsRunning === true) {
      hideAllExtraScreens();
      showImage(healthScreen);
      healthIsActive = true;
    } else if (healthIsActive === false) {
      healthScreen.style.visibility = "visible";
      healthIsActive = true;
    } else if (healthIsActive === true && health2IsActive === false) {
      hideImage(healthScreen);
      showImage(healthScreen2);
      health2IsActive = true;
    } else if (healthIsActive === true && healthIsActive === true) {
      hideImage(healthScreen2);
      hideImage(healthScreen);
      healthIsActive = false;
      health2IsActive = false;
    }
  }
});

cleanButton.addEventListener("click", function () {
  hideAllExtraScreens();
  if (state.tamaPoop > 0) {
    clean();
    cleaningLine.classList.add("cleanAnimation");
    showImage(cleaningLine);
    setTimeout(function () {
      cleaningLine.classList.remove("cleanAnimation");
      hideImage(cleaningLine);
      state.tamaIsHappy = true;
    }, 800);
  } else {
    cleaningLine.classList.add("cleanAnimation");
    showImage(cleaningLine);
    setTimeout(function () {
      cleaningLine.classList.remove("cleanAnimation");
      hideImage(cleaningLine);
    }, 800);
  }
});

disciplineButton.addEventListener("click", function () {
  hideAllExtraScreens();
  if (state.needAttention === true) {
    state.tamaIsMad = true;
    state.needAttention = false;
    state.tamaDiscipline++;
  } else {
    state.tamaIsMad = true;
    let randomNum = randomNumGen(5);
    if (randomNum === 2) {
      state.tamaHappy--;
    }
  }
});

// const menuButton = document.querySelector("#buttonFour");
// const dropDownMenu = document.querySelector("#drop-down-menu");
// const themeButton = document.querySelector("#theme-selection");
// const themeMenu = document.querySelector("#drop-down-color-choice");
// const color1Button = document.querySelector("#color1");
// const color2Button = document.querySelector("#color2");
// const color3Button = document.querySelector("#color3");

function animateCloseAllTabs() {
  themeMenu.classList.remove("second-menu-animate-open");
  themeMenu.classList.add("second-menu-animate-close");

  setTimeout(function () {
    themeMenuIsOpen = false;
    displayHide(themeMenu);
    themeMenu.classList.add("second-menu-animate-open");
    themeMenu.classList.remove("second-menu-animate-close");
  }, 990);

  setTimeout(function () {
    dropDownMenu.classList.remove("menu-animate-open");
    dropDownMenu.classList.add("menu-animate-close");
    setTimeout(function () {
      displayHide(dropDownMenu);
      displayHide(themeMenu);
      dropDownMenu.classList.remove("menu-animate-close");
      dropDownMenu.classList.add("menu-animate-open");
      menuIsOpen = false;
    }, 990);
  }, 400);
}

menuButton.addEventListener("click", function () {
  if (menuIsOpen === false) {
    menuIsOpen = true;
    displayFlex(dropDownMenu);
  } else if (menuIsOpen === true) {
    if (themeMenuIsOpen === true) {
      animateCloseAllTabs();
    } else {
      dropDownMenu.classList.remove("menu-animate-open");
      dropDownMenu.classList.add("menu-animate-close");
      setTimeout(function () {
        displayHide(dropDownMenu);
        displayHide(themeMenu);
        dropDownMenu.classList.remove("menu-animate-close");
        dropDownMenu.classList.add("menu-animate-open");
        menuIsOpen = false;
      }, 1000);
    }
  }
});

themeButton.addEventListener("click", function () {
  if (themeMenuIsOpen === false) {
    themeMenuIsOpen = true;
    displayFlex(themeMenu);
  } else if (themeMenuIsOpen === true) {
    themeMenu.classList.remove("second-menu-animate-open");
    themeMenu.classList.add("second-menu-animate-close");
    setTimeout(function () {
      themeMenuIsOpen = false;
      displayHide(themeMenu);
      themeMenu.classList.add("second-menu-animate-open");
      themeMenu.classList.remove("second-menu-animate-close");
    }, 1000);
  }
});

//themes
color1Button.addEventListener("click", function () {
  state.tamaTheme = 0;
  animateCloseAllTabs();
});

color2Button.addEventListener("click", function () {
  state.tamaTheme = 1;
  animateCloseAllTabs();
});

color3Button.addEventListener("click", function () {
  state.tamaTheme = 2;
  animateCloseAllTabs();
});

const color4Button = document.querySelector("#color4");
color4Button.addEventListener("click", function () {
  state.tamaTheme = 3;
  animateCloseAllTabs();
});

color5Button.addEventListener("click", function () {
  state.tamaTheme = 4;
  animateCloseAllTabs();
});

// const helpEat = document.querySelector('#help-eat');
// const foodGif = document.querySelector('#food-gif');

// const helpLights = document.querySelector('#help-light');
// const lightsGif = document.querySelector('#lights-gif');

// const helpGame = document.querySelector('#help-game');
// const gameGif = document.querySelector('#game-gif');

// const helpSick = document.querySelector('#help-sick');
// const sickGif = document.querySelector('#sick-gif');

// const helpClean = document.querySelector('#help-clean');
// const poopGif = document.querySelector('#poop-gif');

// const helpHealth = document.querySelector('#help-health');
// const healthGif = document.querySelector('#health-gif');

// const helpDiscpline = document.querySelector('#help-discipline');

// const helpAttention = document.querySelector('#help-attention');

// const helpMenuButton = document.querySelector('#help-menu');
// const helpScreen = document.querySelector('#help-screen');

helpMenuButton.addEventListener("click", function () {
  dropDownMenu.classList.remove("menu-animate-open");
  dropDownMenu.classList.add("menu-animate-close");
  setTimeout(function () {
    displayHide(dropDownMenu);
    displayHide(themeMenu);
    dropDownMenu.classList.remove("menu-animate-close");
    dropDownMenu.classList.add("menu-animate-open");
    menuIsOpen = false;
  }, 1000);
  setTimeout(function () {
    displayFlex(helpScreen);
  }, 500);
});

function hideAllGifs() {
  displayHide(foodGif);
  displayHide(lightsGif);
  displayHide(gameGif);
  displayHide(sickGif);
  displayHide(poopGif);
  displayHide(healthGif);
}

helpEat.addEventListener("click", function () {
  hideAllGifs();
  displayFlex(foodGif);
});

helpLights.addEventListener("click", function () {
  hideAllGifs();
  displayFlex(lightsGif);
});

helpGame.addEventListener("click", function () {
  hideAllGifs();
  displayFlex(gameGif);
});

helpSick.addEventListener("click", function () {
  hideAllGifs();
  displayFlex(sickGif);
});

helpClean.addEventListener("click", function () {
  hideAllGifs();
  displayFlex(poopGif);
});

helpHealth.addEventListener("click", function () {
  hideAllGifs();
  displayFlex(healthGif);
});
