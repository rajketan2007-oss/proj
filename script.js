var nav = document.querySelector("nav");

nav.addEventListener("mouseenter", function () {

    var tl = gsap.timeline();

    tl.to("#nav-bottom", {
        height: "25vh",
        duration: 0.3
    });

    tl.to(".nav-elem h5", {
        opacity: 1,
        stagger: 0.05
    });

    tl.from(".nav-elem h5 span", {
        y: 20,
        opacity: 0,
        stagger: 0.05
    });

});

nav.addEventListener("mouseleave", function () {

    var tl = gsap.timeline();

    tl.to(".nav-elem h5", {
        opacity: 0,
        duration: 0.2
    });

    tl.to("#nav-bottom", {
        height: "0vh",
        duration: 0.3
    });

});