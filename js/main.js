const gallery = document.querySelector("#gallery");
const keywordsUnsplash = [
  "nature",
  "tree",
  "bee",
  "dog",
  "sofa",
  "house",
  "livingroom",
  "garage",
  "door",
  "bathroom",
  "handwash",
  "radio",
  "lamp",
  "chinese room",
  "green room",
  "modern room",
  "living table",
];
const emptyArray = Array(getRandom(12, 48)).fill(0);

const cards = emptyArray.map((xd) => {
  const el = document.createElement("img");
  el.src = `https://source.unsplash.com/random/300×300/?${
    keywordsUnsplash[getRandom(0, 16)]
  }`;
  el.alt = "Random pic taken from unsplash";
  el.classList.add(`card-${getRandom(1, 3)}`);
  return el;
});

cards.forEach((card) => {
  gallery.appendChild(card);
});

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
