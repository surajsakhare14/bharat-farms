function showCards() {
    document.querySelectorAll(".card").forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 50) {
            card.classList.add("show");
        }
    });
}

/* Run on scroll */
window.addEventListener("scroll", showCards);

/* 🔥 RUN ON PAGE LOAD */
window.addEventListener("load", showCards);

/* HAMBURGER MENU */
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* CLOSE MENU ON CLICK */
document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});