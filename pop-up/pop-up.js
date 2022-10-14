 var btn = document.querySelector(".btn");
 var quote = document.querySelector(".quote-1");
 var remove = document.querySelector(".icon");

 btn.addEventListener("click", function(){
    quote.classList.toggle("show");
 });
 remove.addEventListener("click", function(){
   quote.classList.toggle("show");
});

