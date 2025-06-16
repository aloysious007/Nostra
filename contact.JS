document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("side-navbar-activate");
    const closeBtn = document.getElementById("side-navbar-close");
    const sideNav = document.querySelector(".side-navbar");

    if (openBtn && closeBtn && sideNav) {
        openBtn.addEventListener("click", () => {
            sideNav.classList.add("active");
        });

        closeBtn.addEventListener("click", () => {
            sideNav.classList.remove("active");
        });
    }
});
