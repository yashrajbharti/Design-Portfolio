const online = document.querySelector(".online");
const offline = document.querySelector(".offline");
document.addEventListener("offline", () => {
  alert("j");
  offline.style.display = "flex";
  online.style.display = "none";
});
document.addEventListener("online", () => {
  offline.style.display = "none";
  online.style.display = "flex";
  setTimeout(() => {
    online.style.display = "none";
  }, 1200);
});
