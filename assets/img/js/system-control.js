const glass = document.getElementById("glass");

document.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.pageX) / 25;

    const y =
        (window.innerHeight / 2 - e.pageY) / 25;

    glass.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

/* DARK MODE */

const btn =
    document.getElementById("themeToggle");

btn.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

});