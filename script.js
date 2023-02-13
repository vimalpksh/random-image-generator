const imageEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");
let imageNum = 10;

btnEl.addEventListener("click", () => {
  addNewImages();
});

const addNewImages = function () {
  for (let index = 0; index < imageNum; index++) {
    const newImageEl = document.createElement("img");
    newImageEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageEl.appendChild(newImageEl);
  }
};
