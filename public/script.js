document.addEventListener("DOMContentLoaded", function () {
    setupSidebar();
    setupNavbar();
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
function setupNavbar() {
    const links = document.querySelectorAll(".nav-links a");

    // Cek menu aktif terakhir di localStorage
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
            // Hapus semua kelas aktif
            links.forEach(l => l.classList.remove("active"));

            // Tambahkan kelas aktif ke menu yang diklik
            this.classList.add("active");

            // Simpan menu aktif ke localStorage
            localStorage.setItem("activeMenu", this.href);
        });
    });
}
