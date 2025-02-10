document.querySelectorAll('.list-item a').forEach(link => {
    link.addEventListener('click', function() {
        // Hapus class 'active' dari semua link
        document.querySelectorAll('.list-item a').forEach(el => el.classList.remove('active'));
        // Tambahkan class 'active' ke link yang diklik
        this.classList.add('active');
    });
});