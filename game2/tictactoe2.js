// game 2 will
// 	store game state in a variable.  (array)
// 	not allow players to play the same square twice
// 	x and o should alternate
// 	console log the board

var nextPlayer = true;

var boardState = [
	null, null, null,
	null, null, null,
	null, null, null
	];

function play(box) {
	if(boardState[box.id] === null){
		if(nextPlayer){
			boardState[box.id] = "x";
		} else {
			boardState[box.id] = "o";
		}
		nextPlayer = !nextPlayer;
	} else {
		alert ("YO! You can not do this!")
	};
	console.log(boardState);
};