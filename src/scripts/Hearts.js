import {
  heart1,
  heart2,
  heart3,
  heart4,
  heart5,
  happy1,
  happy2,
  happy3,
  happy4,
  happy5,
  discipline1,
  discipline2,
  discipline3,
  discipline4,
  discipline5,
} from "./tamaImports";

function updateHeartSvg(state) {
  if (state.tamaHealth === 0) {
    heart1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 0.5) {
    heart1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg";
    heart2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 1) {
    heart1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 1.5) {
    heart1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg";
    heart3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 2) {
    heart1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 2.5) {
    heart1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg";
    heart4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 3) {
    heart1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 3.5) {
    heart1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg";
    heart5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 4) {
    heart1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 4.5) {
    heart1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg";
  } else if (state.tamaHealth === 5) {
    heart1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
  }

  if (state.tamaHappy === 0) {
    happy1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 0.5) {
    happy1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg";
    happy2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 1) {
    happy1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 1.5) {
    happy1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg";
    happy3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 2) {
    happy1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 2.5) {
    happy1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg";
    happy4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 3) {
    happy1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 3.5) {
    happy1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg";
    happy5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 4) {
    happy1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 4.5) {
    happy1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartHalf.svg";
  } else if (state.tamaHappy === 5) {
    happy1.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy2.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy3.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy4.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy5.src = "../src/tamaPictures/tamaAlert/tamaHeart/tama_heartFull.svg";
  }
}

function updateDisciplineSvg(state) {
  if (state.tamaDiscipline === 0) {
    discipline1.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg";
    discipline2.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg";
    discipline3.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg";
    discipline4.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg";
    discipline5.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg";
  } else if (state.tamaDiscipline === 1) {
    discipline1.classList.add("full");
    discipline1.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg";
    discipline2.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg";
    discipline3.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg";
    discipline4.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg";
    discipline5.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg";
  } else if (state.tamaDiscipline === 2) {
    discipline1.classList.add("full");
    discipline2.classList.add("full");
    discipline1.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg";
    discipline2.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg";
    discipline3.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg";
    discipline4.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg";
    discipline5.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg";
  } else if (state.tamaDiscipline === 3) {
    discipline1.classList.add("full");
    discipline2.classList.add("full");
    discipline3.classList.add("full");
    discipline1.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg";
    discipline2.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg";
    discipline3.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg";
    discipline4.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg";
    discipline5.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg";
  } else if (state.tamaDiscipline === 4) {
    discipline1.classList.add("full");
    discipline2.classList.add("full");
    discipline3.classList.add("full");
    discipline4.classList.add("full");
    discipline1.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg";
    discipline2.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg";
    discipline3.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg";
    discipline4.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg";
    discipline5.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter1.svg";
  } else if (state.tamaDiscipline === 5) {
    discipline1.classList.add("full");
    discipline2.classList.add("full");
    discipline3.classList.add("full");
    discipline4.classList.add("full");
    discipline5.classList.add("full");
    discipline1.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg";
    discipline2.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg";
    discipline3.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg";
    discipline4.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg";
    discipline5.src =
      "../src/tamaPictures/tamaAlert/tamaHeart/tama_disciplineMeter2.svg";
  }
}

export { updateHeartSvg, updateDisciplineSvg };
