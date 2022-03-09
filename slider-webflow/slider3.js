const left = document.getElementById("left");
const right = document.getElementById("right");
const mainSlider = document.querySelector(".main-slider");
left.addEventListener("click", () => {
  let x = mainSlider.scrollLeft;
  mainSlider.scrollTo({
    top: 0,
    left: x - 2050,
    behavior: "smooth",
  });
});
right.addEventListener("click", () => {
  let x = mainSlider.scrollLeft;
  mainSlider.scrollTo({
    top: 0,
    left: x + 2050,
    behavior: "smooth",
  });
});
console.log("hello");
