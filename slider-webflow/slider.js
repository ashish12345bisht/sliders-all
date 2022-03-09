const left = document.getElementById("left");
const right = document.getElementById("right");
const slides = document.querySelectorAll(".slides");
var x = 0;

const nextSlide = () => {
  console.log(x);
  if (x >= slides.length) {
    x = 0;
  } else if (x < 0) {
    x = slides.length - 1;
  }
  console.log(x);
  for (let index = 0; index < slides.length; index++) {
    slides[index].classList.remove("next-slide");
    slides[index].classList.remove("cur-slide");
  }
  for (let index = 0; index < slides.length; index++) {
    if (index == x) {
      slides[index].classList.add("cur-slide");
    } else {
      slides[index].classList.add("next-slide");
    }
  }
};

left.addEventListener("click", () => nextSlide(--x));
right.addEventListener("click", () => nextSlide(++x));
