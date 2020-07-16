let hamburger = document.querySelector(".hamburger");
const nav_mobile = document.querySelector(".nav-menu-mobile");


const showNav = () =>{
    nav_mobile.classList.toggle("show");
}
hamburger.addEventListener("click", showNav);