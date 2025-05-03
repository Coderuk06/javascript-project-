let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbuttn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let trunO = true; // playerX playery
let vinPartens = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  trunO = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};


boxs.forEach((box) => {
  box.addEventListener("click", () => {
    if (trunO === true) {
      // player1
      box.innerText = "o";
      trunO = false;
    } else {
      // player2
      box.innerText = "x";
      trunO = true;
    }
    box.disabled = true;

    chackWiner();
  });
});

const disableBoxes = () => {
  for (let box of boxs) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxs) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation , Winer is : ${winner} `;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};
const chackWiner = () => {
  for (let pattern of vinPartens) {
    let posval1 = boxs[pattern[0]].innerText;
    let posval2 = boxs[pattern[1]].innerText;
    let posval3 = boxs[pattern[2]].innerText;

    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 === posval2 && posval2 === posval3) {
        showWinner(posval1);
      }
    }
  }
};

newbuttn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
