const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

body.style.background = `url(${bgImage.src})`;
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";
