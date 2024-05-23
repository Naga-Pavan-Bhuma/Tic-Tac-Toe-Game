let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let newGameBtn = document.querySelector("#new-button");
let container = document.querySelector(".container");
let heading = document.querySelector('.heading')
let turnO = true;
let complete = 0;
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const resetGame = () => {
    turnO = true;
    count=0;
    enableButtons();
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = 'O';
            box.style.textShadow = '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073';
            turnO = false;
        } else {
            box.innerText = 'X';
            box.style.textShadow = '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0004e6, 0 0 40px #0004e6, 0 0 50px #0004e6, 0 0 60px #0004e6, 0 0 70px #0004e6';
            turnO = true;
        }
        count++;
        console.log(count);
        box.disabled = true;
        checkWinner();
    })
});
const enableButtons = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = '';
        heading.innerText='Tic Tac Toe';
        reset.classList.remove('hide');
        heading.style.fontSize='10vmin';
        newGameBtn.classList.add('hide');
    })
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        if (posVal1 != '' && posVal2 != '' && posVal3 != '') {
            if (posVal1 === posVal2 && posVal2 === posVal3) {
                showWinner(posVal1);
                boxes.forEach((box) => {
                    box.disabled = true;
                })
            }
        }
        complete=0;
    }
    if (count == 9 && complete == 0) {
        heading.innerText = 'Game was Draw!';
        count=0;
        reset.classList.add('hide');
        heading.style.fontSize='8vmin';
        newGameBtn.classList.remove('hide');
    }
}
const showWinner = (winner) => {
    count=0;
    heading.innerText = `Congratulations to the winner '${winner}'`;
    heading.style.fontSize='8vmin';
    reset.classList.add('hide');
    newGameBtn.classList.remove('hide');
    complete=1;
}
newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame)