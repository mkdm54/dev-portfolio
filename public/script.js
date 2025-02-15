document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");
    const sidebarLinks = document.querySelectorAll(".sidebar a");
    const links = document.querySelectorAll(".list-item a");

    // Fungsi untuk menangani klik pada menuToggle
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    // Fungsi untuk menangani klik pada overlay
    overlay.addEventListener("click", function () {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });

    // Fungsi untuk menangani klik pada link di sidebar
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function () {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        });
    });

    // Cek menu yang terakhir diklik di localStorage
    const activePage = localStorage.getItem("activeMenu");

    if (activePage) {
        links.forEach(link => {
            if (link.href === activePage) {
                link.classList.add("active");
            }
        });
    }

    // Fungsi untuk menangani klik pada link dalam .list-item
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
