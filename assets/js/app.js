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

    document.querySelector(".copywrite").textContent =
    ` copyright ${(new Date().getFullYear())}`

const Buttons = document.querySelectorAll(".carousel-button")

Buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active
        
    })
})