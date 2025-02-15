const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const sidebarLinks = document.querySelectorAll(".sidebar a");

menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

sidebarLinks.forEach(link => {
    link.addEventListener("click", function () {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".list-item a");

    // Cek menu yang terakhir diklik di localStorage
    const activePage = localStorage.getItem("activeMenu");

    if (activePage) {
        links.forEach(link => {
            if (link.href === activePage) {
                link.classList.add("active");
            }
        });
    }

    links.forEach(link => {
        link.addEventListener("click", function () {
            // Hapus class active dari semua menu
            links.forEach(l => l.classList.remove("active"));

            // Tambahkan class active ke menu yang diklik
            this.classList.add("active");

            // Simpan menu yang aktif ke localStorage
            localStorage.setItem("activeMenu", this.href);
        });
    });
});
