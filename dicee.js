var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var items1 = document.querySelectorAll(".dice1 .item");
var items2 = document.querySelectorAll(".dice2 .item");

console.log(items1);

function rollDice(randomNumber, items) {
  switch (randomNumber) {
    case 1:
      items[4].classList.add("circle");
      break;
    case 2:
      items[0].classList.add("circle");
      items[8].classList.add("circle");
      break;
    case 3:
      items[0].classList.add("circle");
      items[4].classList.add("circle");
      items[8].classList.add("circle");
      break;
    case 4:
      items[0].classList.add("circle");
      items[2].classList.add("circle");
      items[6].classList.add("circle");
      items[8].classList.add("circle");
      break;
    case 5:
      items[0].classList.add("circle");
      items[2].classList.add("circle");
      items[4].classList.add("circle");
      items[6].classList.add("circle");
      items[8].classList.add("circle");
      break;
    case 6:
      items[0].classList.add("circle");
      items[2].classList.add("circle");
      items[3].classList.add("circle");
      items[5].classList.add("circle");
      items[6].classList.add("circle");
      items[8].classList.add("circle");
      break;

    default:
      items[0].classList.remove("circle");
      items[1].classList.remove("circle");
      items[2].classList.remove("circle");
      items[3].classList.remove("circle");
      items[4].classList.remove("circle");
      items[5].classList.remove("circle");
      items[6].classList.remove("circle");
      items[7].classList.remove("circle");
      items[8].classList.remove("circle");
      break;
  }
}

rollDice(randomNumber1, items1);
rollDice(randomNumber2, items2);

var challenge = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  challenge.textContent = "🎉 Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  challenge.textContent = "Player 2 Wins 🎉";
} else {
  challenge.textContent = "Draw";
}
