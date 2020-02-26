//helper function to create the chess board
Array.matrix = function(numrows, numcols, initial){
  let arr = [];
  for (let i = 0; i < numrows; ++i){
    let columns = [];
     for (let j = 0; j < numcols; ++j){
        columns[j] = initial;
     }
     arr[i] = columns;
   }
   return arr;
}
let board = Array.matrix(8,8,0)

//function to place queens on board according to input
let generateBoard = function(wq, bq) {
  board[wq[0]][wq[1]] = 1
  board[bq[0]][bq[1]] = 1
  return board
}
//function to tell if queens are threats to each other. true if threat exists
let queenThreat = function(board) {
  let threat = false
  //Returns a true threat assessment if queens are straight across from each other 
  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) {
    threat = true
  } 
  
  //function to see if two arrays are equal
  //I iterate through the length of each of the 4 diagonals. 
  let arraysMatch = function (arr1, arr2) {
      if (arr1.length !== arr2.length) return false;
  
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };
  
  let row
  let col
  //check top right quadrant for black queen
  //add/subtract incrementally by 1 to x and y to move in a diagonal
    for (let i = 0; i < 8; i++) {
      row = whiteQueen[0] - i
      col = whiteQueen[1] + i 
      if (arraysMatch([row, col], blackQueen)) {
        threat = true; 
      }
    }

  //check bottom right quadrant for black queen 
      for (let i = 0; i < 8; i++) {
      row = whiteQueen[0] + i
      col = whiteQueen[1] + i 
      if (arraysMatch([row, col], blackQueen)) {
      threat = true; 
      break
      }
    }
  
  //check top left quadrant for black queen 
  
    for (let i = 0; i < 8; i++) {
      row = whiteQueen[0] - i
      col = whiteQueen[1] - i 
      if (arraysMatch([row, col], blackQueen)) {
      threat = true; 
      break
      }
    }
  
  //check bottom left quadrant for black queen 
      for (let i = 0; i < 8; i++) {
      row = whiteQueen[0] + i
      col = whiteQueen[1] - i 
      if (arraysMatch([row, col], blackQueen)) {
        threat = true;
        break;
      }
    }
  
  return threat; 
}  
let whiteQueen = [0, 4];
let blackQueen = [2,2];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(generatedBoard);
console.log(queenThreat(generatedBoard))
