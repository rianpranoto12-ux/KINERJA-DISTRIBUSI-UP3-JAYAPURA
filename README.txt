DASHBOARD KINERJA DISTRIBUSI PLN UP3 JAYAPURA

DEPLOY SEBAGAI SITUS STATIS
- Gunakan index.html sebagai halaman awal. CSS dan JavaScript sudah tertanam.
- Jika hosting meminta folder publikasi, ekstrak ZIP dan pilih folder yang
  langsung berisi index.html. Jika hosting menerima satu file, unggah index.html.
- Tidak diperlukan npm install, perintah build, atau server aplikasi.
- Gunakan hosting yang mengizinkan JavaScript di halaman HTML.

JALANKAN DI KOMPUTER
- Buka index.html di browser. Peta dasar OpenStreetMap memerlukan internet.
- Pilih periode, unit dan indikator. Gunakan Edit analisa & evaluasi untuk
  memperbarui catatan, atau Input / edit KPI untuk mengisi target dan realisasi.
- Data kerja tersimpan pada browser dan alamat situs yang digunakan. Gunakan
  Ekspor data kerja dan Impor data kerja untuk memindahkannya ke alamat baru.

ISI PAKET
index.html              Halaman siap deploy dengan CSS dan JavaScript tertanam
assets/styles.css       Salinan sumber CSS
assets/dashboard.js     Salinan sumber JavaScript
README.txt              Petunjuk penggunaan


FILE PENDUKUNG TAMBAHAN
404.html                             Halaman cadangan untuk hosting yang
                                     mengenali 404.html. Tautan kembali
                                     mengarah ke root situs.
assets/favicon.svg                   Sumber ikon situs.
templates/Template_Impor_Data_Kinerja.json
                                     Contoh struktur impor dengan angka kosong.
sinkronkan-index.mjs                 Sinkronisasi sumber ke index.html.

TEMPLATE IMPOR
- Isi target, realisasi, dan catatan sebelum mengimpor. Gunakan angka JSON
  dengan titik desimal. Pertahankan format kunci YYYY-MM|Unit|kode_indikator.
- Untuk unit atau indikator lain, buat entri melalui dashboard lalu ekspor
  JSON agar kode indikatornya sesuai.
- Impor dapat memperbarui entri dengan kunci yang sama setelah dikonfirmasi.
  Ekspor data kerja terlebih dahulu untuk membuat cadangan.

EDIT SUMBER
- Setelah mengedit CSS, JavaScript, atau ikon, jalankan:
  node sinkronkan-index.mjs
- Node.js hanya diperlukan untuk sinkronisasi sumber. Deploy dapat dilakukan
  langsung dengan index.html yang sudah disertakan.
