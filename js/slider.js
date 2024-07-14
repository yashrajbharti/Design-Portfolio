const slider = document.querySelector(".comparison-slider");
const handle = slider.querySelector(".handle");
const beforeImageWrapper = slider.querySelector(".img-wrapper");
let isDragging = false;

function moveHandle(x) {
  const rect = slider.getBoundingClientRect();
  let offsetX = x - rect.left;
  const minOffset = 2; // Minimum offset to prevent handle from going all the way to the left
  const maxOffset = rect.width - 15; // Maximum offset to prevent handle from going all the way to the right
  offsetX = Math.max(minOffset, Math.min(offsetX, maxOffset));
  handle.style.left = offsetX + "px";
  beforeImageWrapper.style.width = offsetX + "px";
}

function startDrag(e) {
  isDragging = true;
  moveHandle(e.clientX || e.touches[0].clientX);
}

function stopDrag() {
  isDragging = false;
}

function drag(e) {
  if (isDragging) {
    moveHandle(e.clientX || e.touches[0].clientX);
  }
}

handle.addEventListener("mousedown", startDrag);
document.addEventListener("mouseup", stopDrag);
document.addEventListener("mousemove", drag);

handle.addEventListener("touchstart", startDrag);
document.addEventListener("touchend", stopDrag);
document.addEventListener("touchmove", drag);
