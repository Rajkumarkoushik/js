const logo = document.querySelector('.navul');
const menu = document.querySelector('.hamburger');
menu.addEventListener('click',function(){
    logo.classList.toggle('showmenu');
});