console.log("Welcome to the XOX Game!");


let audioturn = new Audio("adds/ting.mp3");
let gameOver = new Audio("adds/gameover.mp3");
let turn = "X";

let isGameOver = false;


//function to change the turn 
const changeTurn = ()=>{
    return turn === "X" ?"0":"X";
}

//function to check for a win
const checkWin =()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = 
    [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach(e=>{
        if ((boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML) && (boxtexts[e[2]].innerHTML === boxtexts[e[1]].innerHTML) &&(boxtexts[e[0]].innerHTML!=="" )){
            document.querySelector(".info").innerHTML = boxtexts[e[0]].innerHTML + " Won" ;
            isGameOver = true ;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

//game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{ 
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', ()=>{
        if(boxtext.innerHTML === ''){
            boxtext.innerHTML = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if (!isGameOver){
            document.getElementsByClassName("info")[0].innerHTML = "turn for " + turn;
        }
    }
    })
})

 //add onclick listener to reset button
 reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerHTML = "";
    });
    turn = 'X' ;
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerHTML = "turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0";
 })
