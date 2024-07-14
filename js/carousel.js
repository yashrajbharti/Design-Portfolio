const images = document.querySelectorAll(".grid img");
const modal = document.getElementById("parent-modal");
const modalImg = document.getElementById("modalImg");
const counter = document.getElementById("counter");
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(index);
  });
});

function openModal(index) {
  currentIndex = index;
  modal.style.display = "flex";
  updateModal();
  document.addEventListener("keydown", handleKeydown);
  modal.addEventListener("click", handleClickOutside);
}

function closeModal() {
  modal.style.display = "none";
  document.removeEventListener("keydown", handleKeydown);
  modal.removeEventListener("click", handleClickOutside);
}

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateModal();
}

function updateModal() {
  modalImg.src = images[currentIndex].src;
  counter.textContent = `${currentIndex + 1} / ${images.length}`;
}

function handleKeydown(event) {
  if (event.key === "ArrowLeft") {
    changeSlide(-1);
  } else if (event.key === "ArrowRight") {
    changeSlide(1);
  } else if (event.key === "Escape") {
    closeModal();
  }
}
function handleClickOutside(event) {
  if (event.target === modal) {
    closeModal();
  }
}
