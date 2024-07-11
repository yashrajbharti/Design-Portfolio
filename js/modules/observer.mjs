import { animateJS } from "./animate.mjs";

export const observerJS = () => {
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateJS(entry.target.getAttribute("data-label"));
      }
    });
  };
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Adjust threshold as needed
  });

  const articles = document.querySelectorAll("[data-label]");
  articles.forEach((article) => {
    observer.observe(article);
  });
};
