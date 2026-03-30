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