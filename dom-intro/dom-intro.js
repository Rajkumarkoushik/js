const navigation = document.createElement("nav");
navigation.classList.add("navigation");
document.body.appendChild(navigation);

const navUl = document.createElement("ul");
navUl.classList.add("nav-links");
navigation.appendChild(navUl);
navUl.style.display = "flex";
navUl.style.justifyContent = "space-evenly";



const navLi  = document.createElement("li");
navLi.classList.add("nav-link");
navLi.appendChild(document.createTextNode("Home"));
navUl.appendChild(navLi);
navLi.style.color = "red";
navLi.style.listStyle = "none";


const navLi1  = document.createElement("li");
navLi1.classList.add("nav-link");
navLi1.appendChild(document.createTextNode("About Us"));
navUl.appendChild(navLi1);
navLi1.style.color = "red";
navLi1.style.listStyle = "none";

const navLi2  = document.createElement("li");
navLi2.classList.add("nav-link");
navLi2.appendChild(document.createTextNode("Services"));
navUl.appendChild(navLi2);
navLi2.style.color = "red";
navLi2.style.listStyle = "none";








