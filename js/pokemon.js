let input = document.getElementById("pokemon");
let image = document.querySelector(".pokemon-image");

input.addEventListener("input", function () {
  changeimage(input.value.toLowerCase().trim());
});

function changeimage(name) {
  loadImage(`https://img.pokemondb.net/sprites/home/normal/${name}.png`)
    .then((img) => {
      image.src = img.src;
    })
    .catch((err) => console.error(err));
}

const loadImage = (url) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", (err) => reject(err));
    img.src = url;
  });
