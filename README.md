Website BantuLulus dibangun menggunakan React 19 sebagai library utamanya dan Vite agar proses pemuatannya cepat. Untuk desain tampilannya, website ini menggunakan Tailwind CSS v4, sementara navigasi antar halamannya ditangani oleh React Router v7 sehingga perpindahan halaman terjadi seketika tanpa perlu reload browser.

Fokus utama dari website ini ada pada interaksi dan animasi yang membuatnya terasa hidup. Berikut adalah beberapa teknologi yang digunakan untuk mencapai hal tersebut:

Animasi (GSAP): Hampir semua pergerakan elemen, seperti efek parallax, teks yang melipat secara 3D, atau kemunculan gambar secara berurutan saat di-scroll, digerakkan oleh GreenSock Animation Platform (GSAP).

Scrolling Halus (Lenis): Scroll bawaan perangkat diganti menggunakan Lenis agar pergerakan halaman ke atas dan ke bawah terasa jauh lebih mulus.

Kursor Kustom: Kursor panah biasa dihilangkan dan diganti dengan titik yang mengikuti pergerakan mouse. Titik ini akan membesar saat diarahkan ke tombol atau tautan yang bisa diklik.

Efek Magnetik: Tombol dan ikon tertentu dibuat seolah memiliki gaya tarik. Saat kursor mendekat, elemen tersebut akan sedikit bergeser mengikuti kursor dan memantul kembali ke tempat asal saat kursor menjauh.

Setiap halamannya juga memiliki struktur khusus. Halaman utama menonjolkan teks berjalan dan bagian yang di-scroll secara horizontal. Halaman layanan menggunakan tata letak sticky agar judul tetap menempel di layar saat Anda membaca detailnya. Halaman daftar harga menggunakan sistem tab untuk memisahkan kategori, dan halaman Behind the Scenes menampilkan efek galeri foto 3D yang bisa berotasi.

Secara keseluruhan, struktur kode website ini berfokus pada penggabungan fungsionalitas dasar React dengan pergerakan animasi tingkat lanjut.
