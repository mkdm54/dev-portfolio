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

    activeSidebar(menuToggle, sidebar, overlay);
    closeSidebar(overlay, sidebar);
    closeSidebarOnEmailClick(sidebarLinks, sidebar, overlay);
}

// Fungsi untuk menangani toggle menu
function activeSidebar(menuToggle, sidebar, overlay) {
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

// Fungsi untuk menangani klik di overlay
function closeSidebar(overlay, sidebar) {
    overlay.addEventListener("click", function () {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });
}

// Fungsi untuk menangani klik pada link di sidebar
function closeSidebarOnEmailClick(links, sidebar, overlay) {
    links.forEach(link => {
        link.addEventListener("click", function () {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        });
    });
}

// Fungsi untuk Navbar Links
function highlightActiveLink() {
    localStorage.removeItem("activeMenu");

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
