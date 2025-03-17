// Modal

const btnModal = document.querySelector(".modal-open");
const Modal = document.querySelector(".Modal-Window");
const Overlay = document.querySelector(".overlay");
const closebtn = document.querySelector(".close");
console.log(Modal);

btnModal.addEventListener("click", function () {
  Modal.classList.add("active");
  Overlay.classList.add("overlay-Active");
});

closebtn.addEventListener("click", function () {
  Modal.classList.remove("active");
  Overlay.classList.remove("overlay-Active");
});
