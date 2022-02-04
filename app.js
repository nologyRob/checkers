// // DRAG MOVEMENT

const pieces = document.querySelectorAll(".piece");
const squaresOnBoard = document.querySelectorAll(".square");

pieces.forEach((piece) => {
  piece.addEventListener("dragstart", () => {
    piece.classList.add("dragging");
  });
  piece.addEventListener("dragend", () => {
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
