function computerPlay() {
  const arr = ["stone", "paper", "scissor"];
  return arr[Math.floor(Math.random() * 3)];
}
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === "stone" && computerSelection === "scissor") {
    return "Player wins";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return "Player wins";
  } else if (playerSelection === "paper" && computerSelection === "stone") {
    return "Player wins";
  } else if (playerSelection === computerSelection) {
    return "Draw";
  } else {
    return "Computer wins";
  }
}
function game() {
  let playerSelection = prompt("Enter your choice: stone, paper or scissor");
  let computerSelection = computerPlay();
  alert(
    "Computer selection: " +
      computerSelection +
      "\nPlayer selection: " +
      playerSelection
  );
  let result = playRound(playerSelection, computerSelection);
  alert(result);
}
game();
