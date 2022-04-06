// scroll to top funcitonality

const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",

    });
});

// Nav hamburger selsections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const menuArrow = document.querySelector(".bars");

console.log(menuArrow)


burger.addEventListener("click", () => {
    ul.classList.toggle("show");
    menuArrow.classList.toggle("rotate");
})

// Close hamburger manu after a link is clicked

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((link) => 
link.addEventListener("click", () => {
    ul.classList.remove("show");
    menuArrow.classList.remove("rotate");
    }));