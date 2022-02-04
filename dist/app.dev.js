"use strict";

// // DRAG MOVEMENT
var pieces = document.querySelectorAll(".piece");
var squaresOnBoard = document.querySelectorAll(".square");
pieces.forEach(function (piece) {
  piece.addEventListener("dragstart", function () {
    piece.classList.add("dragging");
  });
  piece.addEventListener("dragend", function () {
    piece.classList.remove("dragging");
  });
});
squaresOnBoard.forEach(function (square) {
  square.addEventListener("dragover", function (event) {
    event.preventDefault();
    var piece = document.querySelector(".dragging");
    square.appendChild(piece);
  });
});