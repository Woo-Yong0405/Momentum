const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];
const chosenImg = images[Math.floor(Math.random() * images.length)];
const bg = document.createElement("img");
bg.src = `img/${chosenImg}`;
document.body.appendChild(bg);
const bh = document.querySelector("img");
bh.classList.add("bgbg");