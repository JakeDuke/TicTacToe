New array "boardState" with the 'null' state of every cell.
same booleans
play function is modified. 
We change not innerHTML but boardState[box.id] (null, x,o)

New function "populateBoard"; 
No argument, for loop (var i = 0; i < 9; i++); 
document.getElementById(i).innerHTML = boardState[i];