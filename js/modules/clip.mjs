export const clipperJS = () => {
  const pos = document.querySelector(".clipper");
  pos.addEventListener("mousemove", (e) => {
    pos.style.setProperty("--xo", e.offsetX + "px");
    pos.style.setProperty("--yo", e.offsetY + "px");
  });
};
