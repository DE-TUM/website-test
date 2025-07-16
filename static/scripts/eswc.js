


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".nav-item").forEach((item) => {
        const submenu = item.querySelector(".nav-submenu");
        if (!submenu) return;

        const link = item.querySelector("a.nav-item--link");
        link.addEventListener("click", (e) => {
            e.preventDefault(); // prevent page navigation
            // close others
            document.querySelectorAll(".nav-item.open").forEach((openItem) => {
                if (openItem !== item) openItem.classList.remove("open");
            });
            item.classList.toggle("open");
        });
    });

    // optional: close on outside click
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".nav-item")) {
            document.querySelectorAll(".nav-item.open").forEach((item) => {
                item.classList.remove("open");
            });
        }
    });
});
