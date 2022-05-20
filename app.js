const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__links");
const navLogo = document.querySelector("#logo");
const body = document.querySelector("body");

const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
    body.classList.toggle("active");
}

menu.addEventListener("click", mobileMenu);



//animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-header",{
    duration: 1,
    opacitiy: 0,
    y: -200,
    stagger: 0.3
});

gsap.from(".animate-title",{
    duration: 1,
    opacitiy: 10,
    y: +150,
    stagger: 0.3
});

gsap.from(".animate-services",{
    scrollTrigger: "animate-services", 
    duration: 1.5,
    opacitiy: 1,
    x: +15,
    stagger: 0,
});

gsap.from(".animate-img",{
    scrollTrigger: "animate-services", 
    duration: 2,
    opacitiy: 0,
    x: +200,
});

gsap.from(".animate-services",{
    scrollTrigger: "animate-services", 
    duration: 1,
    opacitiy: 1,
    x: -150,
    stagger: 0,
});