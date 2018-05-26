// game 3 will 
// 	have populateBoard function that uses our 1d array

var nextPlayer = true;

var boardState = [
	null, null, null,
	null, null, null,
	null, null, null
	];

function play(box) {
	if(boardState[box.id] == null) {	
		if(nextPlayer) {
			boardState[box.id] = 'x';
		} else {
			boardState[box.id] = 'o';
		};
		nextPlayer = !nextPlayer;
		
		populateBoard();
	} else {
		alert("YO! You can not do this!")
	};

};

function populateBoard() {
	for(var i = 0; i < 9; i++) {
		document.getElementById(i).innerHTML = boardState[i];
	};
};