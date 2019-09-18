function onClick() {
  let bet = document.getElementById("startingBet").value;

  if (bet <= 0) displayError();

  money = bet;
  maxMoney = bet;
  rolls = 0;
  rollsAtMax = 0;
  while (money > 0) {
    rollOne = rollDice();
    rollTwo = rollDice();

    if (rollOne + rollTwo === 7) {
      money += 4;
    } else {
      money -= 1;
    }

    if (money > maxMoney) {
      maxMoney = money;
      rollsAtMax = rolls;
    }
    rolls++;
  }

  resultsTable = document.getElementById("results");
  resultsTable.style.display = "block";

  document.getElementById("betAmount").innerHTML = bet;
  document.getElementById("totalRolls").innerHTML = rolls;
  document.getElementById("highestAmount").innerHTML = maxMoney;
  document.getElementById("rollCountAtHighest").innerHTML = rollsAtMax;
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function displayError() {}
