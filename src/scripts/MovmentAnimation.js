import { randomNumGen, timeMathToSec } from "./usefulFunctions";

function hideImage(character) {
  character.style.visibility = "hidden";
}

function showImage(character) {
  character.style.visibility = "visible";
}

function moveLeftToRightRandom(character, state) {
  const removeAllDirections = () => {
    character.classList.remove("left");
    character.classList.remove("right");
    character.classList.remove("rightSmall");
    character.classList.remove("leftSmall");
  };

  if (
    state.foodAnimationGoing ||
    state.tamaPoop >= 2 ||
    timeMathToSec(state.timeState.gameStart) % 2 !== 0
  ) {
    return;
  }

  let randomChoice = randomNumGen(3);

  if (randomChoice === 1) {
    let randomChoice2 = randomNumGen(5);

    if (randomChoice2 === randomNumGen(5)) {
      removeAllDirections();

      character.classList.add("leftSmall");

      return;
    }

    let randomChoice3 = randomNumGen(5);

    if (randomChoice3 === randomNumGen(5)) {
      removeAllDirections();

      character.classList.add("left");
    }

    return;
  }

  if (randomChoice === 2) {
    let randomChoice4 = randomNumGen(5);

    if (randomChoice4 === randomNumGen(5)) {
      removeAllDirections();

      character.classList.add("rightSmall");

      return;
    }

    let randomChoice5 = randomNumGen(5);

    if (randomChoice5 === randomNumGen(5)) {
      removeAllDirections();

      character.classList.add("right");
    }

    return;
  }

  removeAllDirections();
}

function autoRandomFlip(character, state) {
  if (state.foodAnimationGoing != true) {
    if (timeMathToSec(state.timeState.gameStart) % 1 === 0) {
      let randomChoice = randomNumGen(3);

      if (randomChoice === 1 || randomChoice === 2) {
        character.classList.add("flip");
      } else {
        character.classList.remove("flip");
      }
    }
  }
}

export { hideImage, showImage, moveLeftToRightRandom, autoRandomFlip };
