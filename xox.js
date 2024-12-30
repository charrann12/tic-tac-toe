console.log("Welcome to the XOX Game!");

let music = new Audio("adds/music.mp3");
let turn = new Audio("adds/turn.mp3");
let gameOver = new Audio("adds/gameover.mp3");


//function to change the turn 
const changeTurn = ()=>{
    return turn === "X" ?"0":"X";
}

//function to check for a win
const checkWin =()=>{
    
}
