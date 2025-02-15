document.addEventListener("DOMContentLoaded", function () {
    // Sidebar functionality
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

    // Navbar functionality
    const links = document.querySelectorAll(".list-item a");

    // Check the last clicked menu in localStorage
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
            // Remove active class from all menu items
            links.forEach(l => l.classList.remove("active"));

            // Add active class to the clicked menu item
            this.classList.add("active");

            // Save the active menu item to localStorage
            localStorage.setItem("activeMenu", this.href);
        });
    });
});
