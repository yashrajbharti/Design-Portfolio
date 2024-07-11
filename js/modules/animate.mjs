export let animateJS = (label) => {
  const articles = document.querySelectorAll("[data-label]");
  articles.forEach((article) => {
    if (article.getAttribute("data-label") === label)
      article.classList.add("animate");
  });
};
