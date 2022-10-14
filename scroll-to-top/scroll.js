const scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        scrollTop.classList.add("scroll-active");
    }else{
        scrollTop.classList.remove("scroll-active");
    }
});