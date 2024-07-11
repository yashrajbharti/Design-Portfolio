export const clipperJS = () => {
  const pos = document.querySelector(".clipper");
  pos.addEventListener("mousemove", (e) => {
    pos.style.setProperty("--xo", e.offsetX - 105 + "px");
    pos.style.setProperty("--yo", e.offsetY - 70 + "px");
  });
};
