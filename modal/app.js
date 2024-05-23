// select modal-Btn, modal-overlay,close-Btn
// listen for click event on modal-btn and close-btn
// when user click modal-btn andd .OPEN-modal to modal-overlay
// when user clicks close-btn remove .OPEN-MODAL form modal-overlay

const modalbtn = document.querySelector(".modal-btn");
const closebtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

modalbtn.addEventListener("click", () => {
    modal.classList.add("open-modal");
})

closebtn.addEventListener("click", () => {
    modal.classList.remove("open-modal")
})

