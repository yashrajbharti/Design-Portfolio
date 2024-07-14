const online = document.querySelector(".online");
const offline = document.querySelector(".offline");
window.addEventListener("offline", () => {
  offline.style.display = "flex";
  online.style.display = "none";
});
window.addEventListener("online", () => {
  offline.style.display = "none";
  online.style.display = "flex";
  setTimeout(() => {
    online.style.display = "none";
  }, 1200);
});
