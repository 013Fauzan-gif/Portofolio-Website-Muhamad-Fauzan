// Menjalankan kode setelah dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function () {

    // Logika untuk Tab di halaman About Me
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');

            // 1. Hapus kelas 'active' dari semua tombol dan konten
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // 2. Tambahkan kelas 'active' ke tombol yang diklik
            this.classList.add('active');

            // 3. Tampilkan konten yang sesuai dengan tombol yang diklik
            document.getElementById(targetTab).classList.add('active');
        });
    });

});