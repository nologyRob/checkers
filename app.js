// // DRAG MOVEMENT

const pieces = document.querySelectorAll(".piece");
const squaresOnBoard = document.querySelectorAll(".square");
const board = document.querySelectorAll(".board");

pieces.forEach((piece) => {
  piece.addEventListener("dragstart", (event) => {
    // event.dataTransfer.setData("Text", event.target.id);
    console.log(event.target.parentNode.id);
    piece.classList.add("dragging");
  });
  piece.addEventListener("dragend", (event) => {
    // let id = event.dataTransfer.getData("Text");
    // console.log(id);
    piece.classList.remove("dragging");
  });
});

squaresOnBoard.forEach((square) => {
  square.addEventListener("dragover", (event) => {
    event.preventDefault();
    const piece = document.querySelector(".dragging");
    square.appendChild(piece);
  });
});

// for (let i = 0; i < 64; i++) {
//   pieces[i].addEventListener("dragstart", () => {
//     pieces[i].classList.add("dragging");
//   });
//   pieces[i].addEventListener("dragend", () => {
//     pieces[i].classList.remove("dragging");
//   });
// }
