let turn = "X";
let gameOver = false;

const boxes =  document.querySelectorAll(".box");  //contains all 9 boxes
const info =  document.querySelector(".info");
const reset =  document.getElementById("Reset");


function changeTurn(){
    return turn === "X"?"O":"X";   //this is for changing turns
}

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        let boxText = box.querySelector(".boxtext");

        if (boxText.innerText === "" && !gameOver) {

           boxText.innerText = turn;

        checkWin();

        if(!gameOver){
            turn = changeTurn();
            info.innerText = "Turn for " + turn;
            }
        }

    });

});


const winPatterns = [

    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]

];

function checkWin() {

    let boxTexts = document.querySelectorAll(".boxtext");

    winPatterns.forEach((pattern) => {

        let a = boxTexts[pattern[0]].innerText;
        let b = boxTexts[pattern[1]].innerText;
        let c = boxTexts[pattern[2]].innerText;

        if (a !== "" && a === b && b === c) {

            info.innerText = a + " Wins!";

            gameOver = true;

        }

    });

}



reset.addEventListener("click", () => {

    boxes.forEach((box) => {

        box.querySelector(".boxtext").innerText = "";

    });

    turn = "X";

    gameOver = false;

    info.innerText = "Turn for X";

});