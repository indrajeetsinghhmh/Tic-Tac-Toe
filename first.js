let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let nGame = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO

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

const resetgame = () =>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
    msg.innerText = `${winner} won the Match...`
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val == pos2Val && pos2Val == pos3Val){
            console.log("winner");
            showWinner(pos1Val);
        }
    }
  }
};

nGame.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);