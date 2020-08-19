let buttons = document.querySelectorAll('button');
let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.compScore');
let win = document.querySelector('.win-win');
let playerChoice = document.querySelector('.playerChoice');
let computerChoice = document.querySelector('.computerChoice');


function computerPlay() {
		let words = ['rock', 'paper', 'scissors']
		let number = Math.floor(Math.random() * words.length)
		return words[number]
	}

buttons.forEach((button) => {
	let playerSelection = button.id;
	button.addEventListener('click', (e) => playRound(playerSelection));
});

function playRound(playerSelection) {
	let compSelection = computerPlay().toUpperCase();
	let userSelection = playerSelection.toUpperCase();

	let userWin = compWin = false;

	function noWinner() {
		userWin = compWin = false;
	}

	function userWins() {
		userWin = true;
		compWin = false;
	}

	function compWins() {
		userWin = false;
		compWin = true;
	}

	if (userSelection === compSelection) {
		noWinner();
	} else if (
		(userSelection == 'PAPER' && compSelection == 'ROCK')||
		(userSelection == 'ROCK' && compSelection == 'SCISSORS')||
		(userSelection == 'SCISSORS' && compSelection == 'PAPER')
		) {
		userWins();
	} else if (
		(userSelection == 'PAPER' && compSelection == 'SCISSORS')||
		(userSelection == 'ROCK' && compSelection == 'PAPER')||
		(userSelection == 'SCISSORS' && compSelection == 'ROCK')
		) {
		compWins();
	}

	if (gameOver) {
		resetGame();
		gameOver = false;
	}

	game(userWin, compWin, userSelection, compSelection);
}

let userScore = compScore = 0;
let gameOver = false;

function game(userWin, compWin, userSelection, compSelection) {
	playerChoice.innerHTML = `Player Selected : ${userSelection}`;
	computerChoice.innerHTML = `Computer Seleted : ${compSelection}`;
	if (userWin) {
				userScore = userScore + 1;
				playerScore.innerHTML = `Player Score : ${userScore}`;
				win.innerHTML = "Player beats Computer";
	} else if (compWin) {
				compScore = compScore + 1;
				computerScore.innerHTML = `Computer Score : ${compScore}`;
				win.innerHTML = "Computer beats Player"
	}else if (userWin == false && compWin == false) {
				win.innerHTML = "It's a Draw"
	}

	if (userScore == 5) {
				win.innerHTML = "Player wins the tournament";
				gameOver = true;
	} else if (compScore ==5) {
				win.innerHTML = "Computer wins the tournament";
				gameOver = true;
	}

}

function resetGame() {
	userScore = compScore = 0;
	win.innerHTML = ''
	playerScore.innerHTML = `Player Score ${userScore}`;
	computerScore.innerHTML = `Computer Score ${compScore}`;
}