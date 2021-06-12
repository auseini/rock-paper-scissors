let playerScore = 0;
let computerScore = 0;


//get references to button
const signButtons = document.querySelectorAll(".playerButton");
signButtons.forEach((button) => button.addEventListener("click", playRound));

function computerPlay(){

	let choices = ["rock", "paper", "scissors"];

	let index = Math.floor(Math.random() * 3);

	return choices[index];
}

function playRound(e){
	//get selections
	const playerSelection = e.target.id;
	const computerSelection = computerPlay();

	//get winner
	const winner = getWinner(playerSelection, computerSelection);

	// update selections
	updateSelections(playerSelection, computerSelection);
	//update message
	updateMessage(winner);
	//adjust score
	updateScore();
}

//function to get winner
function getWinner(player, computer){
	//tie case
	if(player === computer){
		return "tie";
	}

	//player win conditions
	if((player === "rock" && computer === "scissors")
		|| (player === "paper" && computer === "rock")
			|| (player === "scissors" && computer === "paper")){
		playerScore++;
		return "player";
	}

	//computer win conditions
	if((computer === "rock" && player === "scissors")
		|| (computer === "paper" && player === "rock")
			|| (computer === "scissors" && player === "paper")){
		computerScore++;
		return "computer";
	}
}
//function to update message
function updateMessage(winner){
	//get message html element innerHTML
	const message = document.getElementById("message");
	
	if(winner === "tie"){
		message.innerHTML = "Tie!";
	} else if (winner === "player"){
		message.innerHTML = "You win!";
	} else {
		message.innerHTML = "Computer wins!";
	}
}
//function to update score
function updateScore(){
	console.log(playerScore);
	document.getElementById("player").innerHTML = "Player: " + playerScore;
	document.getElementById("computer").innerHTML = "Computer: " + computerScore;
}
//function to update selections
function updateSelections(player, computer){
	document.getElementById("playerSelection").innerHTML = player.toUpperCase();
	document.getElementById("computerSelection").innerHTML = computer.toUpperCase();
}


