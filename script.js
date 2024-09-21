let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#btn");
let newGameButton = document.querySelector("#new-btn");
let resetButton = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO === true) { // playerO
            box.innerText = "O";
            turnO = false;
        } else { // playerX
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
        checkWinner();
    });
});


const disabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}


const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

 
const checkWinner = ()  => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                // alert(` ${pos1val} player 1 is winner`);
                showWinner(pos1val);
            }
        }
    }
};


newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
