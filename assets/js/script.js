/*
Game status element
*/
const statusDisplay = document.getElementsByClass('game-status');
/*
Variables for tracking game state throughout
*/
/*
Pause game in case of end scenario
*/
let gameActive = true;
/*
Store current player, so we know whos turn 
*/
let currentPlayer = "X";
/*
Store current game state here as empty strings in an array
to track played cells and validate game state later on
*/
let gameState = ["", "", "", "", "", "", "", "", ""];
/*
Messages will display to user during game.
Declared as functions due to dynamic factors ie. current player, 
so actual message gets created with current data each time needed.
*/
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
/*
Set inital message to let players know whose turn it is
*/
statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed() {

}
function handlePlayerChange() {

}
function handleResultValidation() {

}
function handleCellClick() {

}
function handleRestartGame() {

}
/*
Add event listeners to game cells and restart button
*/
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.getElementById('restart-btn').addEventListener('click', handleRestartGame);