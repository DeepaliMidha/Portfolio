document.querySelectorAll(".portfolio-item").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
        
        document.querySelector(`.modal#${item.dataset.modalId}`).classList.toggle("open");
        document.querySelectorAll(`.modal#${item.dataset.modalId} *`).forEach((item,i) => {
            item.classList.add("fade-up");
            item.style.animationDuration = `${(i+1)*.4}s`;
        });
        document.body.style.overflow = "hidden";
    });
});
document.querySelectorAll(".close").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".modal").forEach(item => {
            item.classList.remove("open");
        });
        document.querySelectorAll(".portfolio-item").forEach(item => {
            item.classList.remove("open");
        });
        document.querySelectorAll(`.modal *`).forEach(item => {
            item.classList.remove("fade-up");
        });
        document.body.style.overflow = "visible";
    });
});