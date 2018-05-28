
var nextPlayer = true;

var boardState = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
	];

var header = document.getElementById("head");
var reset = document.getElementById("reset");
var whowon = undefined;

function winner() {
	boxCheck("x");
	boxCheck("o");
	function boxCheck(box){
		if (
	(boardState[0][0] == box && boardState[0][1] == box && boardState[0][2] == box ) ||
	(boardState[1][0] == box && boardState[1][1] == box && boardState[1][2] == box ) ||
	(boardState[2][0] == box && boardState[2][1] == box && boardState[2][2] == box ) ||
	(boardState[0][0] == box && boardState[1][0] == box && boardState[2][0] == box ) ||
	(boardState[0][1] == box && boardState[1][1] == box && boardState[2][1] == box ) ||
	(boardState[0][2] == box && boardState[1][2] == box && boardState[2][2] == box ) ||
	(boardState[0][0] == box && boardState[1][1] == box && boardState[2][2] == box ) ||
	(boardState[0][2] == box && boardState[1][1] == box && boardState[2][0] == box )
	) {
			header.innerHTML = box.toUpperCase() + " WON THE GAME";
			whowon = box;
		}
	}

}	

var play = function (box) {
	if (whowon == undefined) {
		var row = box.parentElement.getAttribute('row');
		var column = box.getAttribute('column');
		if(boardState[row][column] == null) {	
			if(nextPlayer) {
				boardState[row][column] = 'x';
				header.innerHTML = 'PLAYER O';
			} else {
				boardState[row][column] = 'o';
				header.innerHTML = 'PLAYER X';
			};
			nextPlayer = !nextPlayer;
			console.log(boardState);
			populateBoard();
		} else {
			header.innerHTML = 'WHO\'S A BAD BOY?';
			
		};
		winner();
	} else {

	}
};


function populateBoard() {
	var board = document.getElementById('ticTacBoard').children[0].children;
	console.log(board);
	var row;
	var column;
	for(var i = 0; i < 3; i++) {
		row = board[i].children;
		for(var j = 0; j < 3; j++) {
			column = row[j];
			column.innerHTML = boardState[i][j];
		};
	};
};

function buildBoard() {
	var board = document.getElementById('ticTacBoard');
	var row;
	var cell;
	for(var i = 0; i < 3; i++) {
		row = board.insertRow(i);
		row.setAttribute('row', i);
		for(var j = 0; j < 3; j++) {
			cell = row.insertCell(j); 
			// why not set it to null directly?
			// because what if you want to finish a saved game?
			cell.innerHTML = boardState[i][j];
			cell.setAttribute('column', j);
			cell.setAttribute('onclick', 'play(this)');

		};
	};
};

function resetTable(){
	var board = document.getElementById('ticTacBoard').children[0].children;
	var row;
	var column;
	for(var i = 0; i < 3; i++) {
		row = board[i].children;
		for(var j = 0; j < 3; j++) {
			column = row[j];
			column.innerText = '';
		};
	};
	boardState = [
		[null, null, null],
		[null, null, null],
		[null, null, null]
		];
	header.innerHTML = "AMAZING TICTACTOE";
	whowon = undefined;
};

reset.addEventListener("click",resetTable);

window.addEventListener('DOMContentLoaded', function() {
	buildBoard();
});


