let endGame = false;
let turn = 'X';
const plays = ['', '', '', '', '', '', '', '', ''];

function handleBoardClick(e) {
  let divEl = e.path[0];
  let play = e.path[0].id.split('n')[1];

  if (!endGame) {
    if (plays[play] === '') {
      divEl.innerHTML = `${turn}`;
      plays[play] = `${turn}`;
      toggleTurn();
    }
  }
}

function toggleTurn() {
  endGame = checkEndGame();

  if (turn == "X") {
    turn = "O";
  } else {
    turn = "X";
  }

  if (!endGame) {
    document.querySelector('.game-info').innerHTML = `Vez do jogador: ${turn}`;
  }
}

function checkEndGame() {

  let empate = 0;

  for (let i = 0; i < 9; i++) {
    if (plays[i] === 'X' || plays[i] === 'O') {
      empate++;
    }
    console.log(empate);
  }

  if (empate == 9) {
    document.querySelector('.game-info').innerHTML = "EMPATE";
    return true;
  } else if (plays[0] != '' && plays[0] == plays[1] && plays[1] == plays[2]) {
    document.querySelector('.game-info').innerHTML = `Jogador '${turn}' ganhou !!!`;
    return true;
  } else if (plays[3] != '' && plays[3] == plays[4] && plays[4] == plays[5]) {
    document.querySelector('.game-info').innerHTML = `Jogador '${turn}' ganhou !!!`;
    return true;
  } else if (plays[6] != '' && plays[6] == plays[7] && plays[7] == plays[8]) {
    document.querySelector('.game-info').innerHTML = `Jogador '${turn}' ganhou !!!`;
    return true;
  } else if (plays[0] != '' && plays[0] == plays[3] && plays[3] == plays[6]) {
    document.querySelector('.game-info').innerHTML = `Jogador '${turn}' ganhou !!!`;
    return true;
  } else if (plays[1] != '' && plays[1] == plays[4] && plays[4] == plays[7]) {
    document.querySelector('.game-info').innerHTML = `Jogador '${turn}' ganhou !!!`;
    return true;
  } else if (plays[2] != '' && plays[2] == plays[5] && plays[5] == plays[8]) {
    document.querySelector('.game-info').innerHTML = `Jogador '${turn}' ganhou !!!`;
    return true;
  } else if (plays[0] != '' && plays[0] == plays[4] && plays[4] == plays[8]) {
    document.querySelector('.game-info').innerHTML = `Jogador '${turn}' ganhou !!!`;
    return true;
  } else if (plays[2] != '' && plays[2] == plays[4] && plays[4] == plays[6]) {
    document.querySelector('.game-info').innerHTML = `Jogador '${turn}' ganhou !!!`;
    return true;
  }

  return false;
}