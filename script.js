let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let newGame = document.querySelector(".new_game");
let rollDice = document.querySelector(".roll_dice");
let hold = document.querySelector(".hold");

let dice = document.querySelector(".dice_image");
let score1 = document.querySelector("#score-1");
let currentScore1 = document.querySelector("#current-score-player-1");
let score2 = document.querySelector("#score-2");
let currentScore2 = document.querySelector("#current-score-player-2");

let currentPlayer, scores, currentScore, playing;

function init() {
  currentPlayer = 1;
  scores = [0, 0, 0];
  currentScore = 0;
  playing = true;

  dice.classList.add("hidden");
  score1.textContent = 0;
  score2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  box1.classList.add("box--active");
  box2.classList.remove("box--active");
}

init();

const switchPlayer = function () {
  if (playing) {
    document.getElementById(
      `current-score-player-${currentPlayer}`
    ).textContent = 0;
    currentPlayer = currentPlayer == 1 ? 2 : 1;
    currentScore = 0;
    box1.classList.toggle("box--active");
    box2.classList.toggle("box--active");
  }
};

rollDice.addEventListener("click", function () {
  if (playing) {
    let number = Math.floor(Math.random() * 6 + 1);

    dice.classList.remove("hidden");
    dice.src = `dice-${number}.png`;
    if (number !== 1) {
      currentScore += number;
      console.log(currentScore);
      console.log(currentPlayer);
      document.getElementById(
        `current-score-player-${currentPlayer}`
      ).textContent = currentScore;

      document.getElementById("current-score-0").textContent = currentScore1;
    } else if (number == 1) {
      switchPlayer();
    }
  }
});

hold.addEventListener("click", function () {
  if (playing) {
    scores[currentPlayer] += currentScore;
    console.log(scores);
    document.getElementById(`score-${currentPlayer}`).textContent =
      scores[currentPlayer];

    if (scores[currentPlayer] >= 100) {
      playing = false;

      document.getElementById(
        `current-score-player-${currentPlayer}`
      ).textContent = 0;
      dice.classList.add("hidden");

      document
        .querySelector(`.box${currentPlayer}`)
        .classList.remove("box--active");
    } else {
      switchPlayer();
    }
  }
});

newGame.addEventListener("click", init);
