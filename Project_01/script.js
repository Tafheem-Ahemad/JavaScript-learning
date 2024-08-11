let num = Math.floor(Math.random() * 100 + 1);

let submit = document.querySelector('#subt');
let startGame = document.querySelector('#startButon');
let getNum = document.querySelector('#guessField');
let gauss = document.querySelector('.guesses');
let remainingTakes = document.querySelector('.lastResult');
let print_result = document.querySelector('p');
let resultdiv = document.querySelector('.resultParas');
let gauseeAns = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let playGame = false;
let remaining = 10;
let prevGausses = [];

startGame.addEventListener('click', function (e) {
  e.preventDefault();
  newGame();
});

submit.addEventListener('click', function (e) {
  if (playGame) {
    e.preventDefault();
    let val = Number(getNum.value);
    checkNumber(val);
  } else {
    alert(`Start The game`);
  }
});

function checkNumber(val) {
  if (isNaN(val)) {
    alert(`Please a Valid Number`);
  } else if (!Number.isInteger(val)) {
    alert(`Please a Valid Number`);
  } else if (val < 1 || val > 100) {
    alert(`Please a Valid Number`);
  } else {
    prevGausses.push(val);
    gauss.innerHTML += `${val} `;
    decideResult(val);
    if (playGame && remaining == 0) {
      printResult(`Game is Over , The Secret Number is ${num}`);
      endGame();
    }
  }
}

function printResult(s) {
  p.innerHTML = `<h2>${s}</h2>`;
  resultdiv.appendChild(p);
}

function decideResult(val) {
  prevGausses.push(val);
  if (val < num) {
    displyMassage(`Your Number is low`);
  } else if (val > num) {
    displyMassage(`Your Number is High`);
  } else {
    displyMassage(`Your Win !!! `);
    endGame();
  }
  remaining--;
  remainingTakes.innerText = `${remaining}`;
}

function displyMassage(s) {
  gauseeAns.innerHTML = `<h3>${s}</h3>`;
}

function newGame() {
  num = Math.floor(Math.random() * 100 + 1);
  remaining = 10;
  if (resultdiv.contains(p)) {
    resultdiv.removeChild(p);
  }
  gauss.innerHTML = '';
  playGame = true;
}

function endGame() {
  playGame = false;
}
