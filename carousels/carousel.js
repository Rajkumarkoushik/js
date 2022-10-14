let slideMain = 1;
slideShow(slideMain);

function nextSlide(n) {
  slideShow(slideMain += n);
}

function presentSlide(n) {
  slideShow(slideMain = n);
}

function slideShow(n) {
  let i;
  let slider = document.getElementsByClassName("carousels-img");
  let dots = document.getElementsByClassName("slide-show");
  if (n > slider.length) {slideMain = 1}    
  if (n < 1) {slideMain = slider.length}
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slider[slideMain-1].style.display = "block";  
  dots[slideMain-1].className += " active";
}


// Carousel another method

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

nextBtn.addEventListener("click", () => {
  if(counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click", () => {
  if(counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if(carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

  }
  if(carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

  }
});





