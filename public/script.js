document.addEventListener("DOMContentLoaded", function () {
    setupSidebar();
    highlightActiveLink();
});

// Fungsi untuk Sidebar
function setupSidebar() {
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
}

// Fungsi untuk Navbar Links
function highlightActiveLink() {
    localStorage.removeItem("activeMenu"); // Hapus menu aktif setiap kali halaman direfresh

    const links = document.querySelectorAll(".nav-links a");
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
            links.forEach(l => l.classList.remove("active"));

            this.classList.add("active");

            localStorage.setItem("activeMenu", this.href);
        });
    });
}
