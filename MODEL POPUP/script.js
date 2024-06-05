let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let showModalBtns = document.querySelectorAll(".showModal");
let popupId = document.getElementById("popupId");

function showModal(number) {
 modal.classList.toggle("hidden");
 overlay.classList.toggle("hidden");
 popupId.innerText = number;
}

function keyBoardAction(event) {
 console.log(event.key);
 if (event.key == "Escape" || event.key == "Backspace") {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
 }
}

document.addEventListener("keydown", keyBoardAction);
