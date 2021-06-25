//date

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//nav toggle

const toggleBar = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".links-container");
const link = document.querySelector(".links")

toggleBar.addEventListener("click", function () {
    const linkContainerHeight = linkContainer.getBoundingClientRect().height;
    const linkHeight = link.getBoundingClientRect().height;

    if (linkContainerHeight == 0) {
        linkContainer.style.height = `${linkHeight}px`;
    }

    else {
        linkContainer.style.height = "0px";
    }
});


// Fixed Nav

const navbar = document.getElementById("nav");
const scroolToTop = document.querySelector(".top-link");
const header = document.getElementById("home")
window.addEventListener("scroll", function () {
    const navbarHeight = navbar.getBoundingClientRect().height;
    console.log(navbarHeight);
    const scrollHeight = window.pageYOffset;


    if (scrollHeight > navbarHeight) {
        navbar.classList.add("fixed-nav");
    }

    else {
        navbar.classList.remove("fixed-nav");
    }

    const headerHeight = header.getBoundingClientRect().height;

    if (scrollHeight > headerHeight / 2) {
        scroolToTop.classList.add("show-link");
    }

    else {
        scroolToTop.classList.remove("show-link");
    }

});

const scroolLink = document.querySelectorAll(".scroll-link");

scroolLink.forEach(function (link) {
    scroolLink.addEventListener("click", function (m) {
        linkContainer.style.height = 0;
    });
});

