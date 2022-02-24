const images = ["2.jpg", "3.jpg", "6.jpg", "7.jpg"];
const chosenImage = images[ Math.floor(Math.random() * images.length) ];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.className = "bgImage";
document.body.appendChild(bgImage);