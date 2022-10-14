const dot = document.querySelector(".dot");
const dat = document.querySelector(".delete");

dot.addEventListener("click", () => {
    dat.classList.toggle("show");
});