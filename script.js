document.addEventListener("DOMContentLoaded", function() {
    // Ambil elemen audio
    var audio = document.getElementById('linkmp3');
    
    // Memainkan audio ketika tombol love diklik
    document.querySelector('.lovein').addEventListener('click', function(e) {
        e.preventDefault();
        audio.play();
        Swal.fire('Pesan', 'Selamat Ulang Tahun!', 'success');
    });

    // Menambahkan efek TypeIt
    new TypeIt("#utama", {
        strings: "Selamat Ulang Tahun!",
        speed: 50,
        waitUntilVisible: true
    }).go();

    // Menambahkan fungsi untuk emoji klik
    var emojies = document.querySelectorAll('#kolombaru li');
    emojies.forEach(function(emoji) {
        emoji.addEventListener('click', function() {
            Swal.fire('Emoji', 'Kamu telah mengklik emoji!', 'info');
        });
    });

    // Menambahkan event listener untuk tombol lanjut
    document.getElementById('opsL').addEventListener('click', function() {
        Swal.fire('Lanjut', 'Lanjutkan ke pesan berikutnya!', 'warning');
    });
});
