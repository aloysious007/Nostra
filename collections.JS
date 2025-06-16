// Close offer bar when X is clicked
document.addEventListener("DOMContentLoaded", function () {
    const offerClose = document.getElementById("offer-close");
    const offerBar = document.querySelector(".offer-bar");

    if (offerClose && offerBar) {
        offerClose.addEventListener("click", () => {
            offerBar.style.display = "none";
        });
    }
});

//Search Function
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".navbar-search input[type='search']");
    const products = document.querySelectorAll(".product");

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();

        products.forEach(product => {
            const tags = product.querySelector(".product-tags").textContent.toLowerCase();

            if (tags.includes(searchTerm)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});

//Filter Function
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".navbar-search input[type='search']");
    const checkboxes = document.querySelectorAll(".filter-section input[type='checkbox']");
    const products = document.querySelectorAll(".product");

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilters = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value.toLowerCase());

        products.forEach(product => {
            const tags = product.querySelector(".product-tags").textContent.toLowerCase();
            const title = product.querySelector("h1").textContent.toLowerCase();

            const matchesSearch = title.includes(searchTerm) || tags.includes(searchTerm);
            const matchesFilter = activeFilters.every(filter => tags.includes(filter));

            if (matchesSearch && matchesFilter) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    searchInput.addEventListener("input", filterProducts);
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", filterProducts);
    });
});

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
