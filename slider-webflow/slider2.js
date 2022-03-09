const upper = document.querySelector(".upper-slider");
const right = document.getElementById("right");
const left = document.getElementById("left");
const images = document.querySelectorAll(".images");
var x = 0;
right.addEventListener("click", () => {
  //   let x = upper.scrollLeft;
  //   x += 300;
  //   upper.scrollBy(x, 0);
  x += 3;
  if (x >= images.length) x = 0;
  if (x < 0) x = images.length - 1;
  images[x].scrollIntoView({
    behavior: "smooth",
  });
});
left.addEventListener("click", () => {
  x -= 3;
  if (x >= images.length) x = 0;
  if (x < 0) x = images.length - 1;
  images[x].scrollIntoView({
    behavior: "smooth",
  });
});
