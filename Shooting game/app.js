const health1 = document.querySelector(".health1");
const health2 = document.querySelector(".health2");
const won1 = document.querySelector(".won1");
const won2 = document.querySelector(".won2");
const startbtn = document.querySelector(".start");
const winner = document.querySelector(".winner");

let win1 = [];
let win2 = [];
let fin1 = 0;
let fin2 = 0;

const player1 = {
  health: 100,
  win: 0,

  shoot() {
    let power = Math.floor(Math.random() * 6);
    player2.health -= power;
    health2.textContent = player2.health;
    if (player2.health <= 0) {
      console.log("player 2 lost");
      health2.textContent = "die";
      win1.push(1);

      const sum1 = win1.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);

      console.log(sum1);

      won1.textContent = sum1;
      fin1 = sum1;

      if (fin1 === 3) {
        winner.textContent = `Player 1 Won👑 the match!`;
      }

      player1.win = 1;
    }
    return power;
  },
};

const player2 = {
  health: 100,
  win: 0,

  shoot() {
    let power = Math.floor(Math.random() * 6);
    player1.health -= power;
    health1.textContent = player1.health;

    if (player1.health <= 0) {
      console.log("player 1 lost");
      health1.textContent = "die";

      win2.push(1);

      const sum2 = win2.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);

      console.log(sum2);

      won2.textContent = sum2;
      fin2 = sum2;

      if (fin2 === 3) {
        winner.textContent = `Player 2 Won👑 the match!`;
      }

      player2.win = 1;
    }

    return power;
  },
};

let begin = function () {
  setInterval(() => {
    if (player1.health > 0 && player2.health > 0) {
      player1.shoot();
      player2.shoot();
    }
  }, 200);

  if (win1.length === 5 || fin1 === 3) {
    // alert("Player 1 Wins the tournament");
    winner.textContent = `Player 1 Won👑 the match!`;
  } else if (win2.length === 5 || fin2 === 3) {
    // alert("Player 2 Wins the tournament");
    winner.textContent = `Player 2 Won👑 the match!`;
  } else if (player1.win === 1) {
    player1.health = 100;
    player2.health = 100;
  } else if (player2.win === 1) {
    player1.health = 100;
    player2.health = 100;
  }
};

startbtn.addEventListener("click", begin);
