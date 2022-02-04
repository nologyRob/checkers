"use strict";

// // DRAG MOVEMENT
var pieces = document.querySelectorAll(".piece");
var squaresOnBoard = document.querySelectorAll(".square");
var board = document.querySelectorAll(".board");
pieces.forEach(function (piece) {
  piece.addEventListener("dragstart", function (event) {
    // event.dataTransfer.setData("Text", event.target.id);
    console.log(event.target.parentNode.id);
    /*targeting originating div*/

    piece.classList.add("dragging");
  });
  piece.addEventListener("dragend", function (event) {
    // let id = event.dataTransfer.getData("Text");
    // console.log(id);
    piece.classList.remove("dragging");
  });
});
squaresOnBoard.forEach(function (square) {
  square.addEventListener("dragover", function (event) {
    event.preventDefault();
    var piece = document.querySelector(".dragging");
    square.appendChild(piece);
  });
}); // for (let i = 0; i < 64; i++) {
//   pieces[i].addEventListener("dragstart", () => {
//     pieces[i].classList.add("dragging");
//   });
//   pieces[i].addEventListener("dragend", () => {
//     pieces[i].classList.remove("dragging");
//   });
// }