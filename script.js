
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
};

let search=document.querySelector('.search-box');
document.querySelector('#search-icon').onClick=()=>{
    search.classList.toggle('active');
}