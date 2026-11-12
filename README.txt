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

SUMBER DATA 2026
- Dashboard dibuka pada Juni 2026 dengan pilihan Data Excel 2026.
- Sumber: REALISASI KINERJA UP3 JAYAPURA 2026.xlsx. Tujuh indikator yang
  memiliki padanan dimuat untuk UP3 dan enam ULP.
- Penjualan total kumulatif: realisasi NPS_isi baris 34–40. Target total
  dihitung dari baseline NPS_isi baris 24–30 ditambah target delta pada
  Target Kinerja 2026, agar setara dengan realisasi penjualan total.
- Susut tanpa E-min: tel_2 baris 3–9, Januari–Mei. Nilai berulang mulai
  Juni berasal dari sumber energi yang belum diisi, sehingga dibiarkan kosong.
- SAIDI, SAIFI, ENS, dan response time: JARKONS_isi. Response time mengikuti
  definisi di luar clear tamper dan angka Januari 0 menit dibiarkan kosong.
- Rating negatif: jumlah bulanan JARKONS_isi kolom Q–AB diakumulasi sejak
  Januari. Rekap Juni UP3 dari jumlah bulanan adalah 10, sedangkan tab
  Realisasi mencatat 9. Dashboard memakai jumlah dari kolom bulanan.
- Target selain penjualan diambil dari Target Kinerja 2026. Realisasi
  ditampilkan hingga bulan terakhir yang tersedia untuk setiap unit dan KPI.
- Indikator lain dan rincian penyebab ditampilkan kosong sampai diisi.
  Gangguan TM pada Excel mencakup cakupan berbeda dari gangguan penyulang.
- Data kerja (Excel + edit) menampilkan data Excel dengan isian browser
  yang berlaku pada periode, unit, dan indikator yang sama. Data Excel 2026
  menampilkan angka dasar dari file. Ekspor mencakup data Excel dan isian.

OPSI IMPOR DATA
- Buka Impor data kerja, lalu pilih tautan spreadsheet, Excel/CSV, atau JSON.
- Untuk spreadsheet, gunakan templates/Template_Impor_Data_Kinerja.csv.
  Kolom wajib: periode, unit, indikator, target, realisasi. Kolom lain opsional.
  Format periode YYYY-MM dan tenggat YYYY-MM-DD sebagai teks. Pakai nama unit
  dashboard dan kode indikator, misalnya sales atau saidi. Kolom angka kosong
  mempertahankan nilai yang sudah ada. Isi 0 jika realisasinya memang nol.
- Jika menyimpan sebagai Excel, pilih .xlsx. Gunakan tab Data atau lembar pertama.
  File rekap dengan tata letak berbeda perlu disalin dulu ke kolom template.
- Untuk Google Sheets, gunakan tautan tab yang dapat dibaca browser atau
  tautan ekspor CSV. Tautan langsung CSV/XLSX perlu mengizinkan akses lintas situs.
  Jika tautan dibatasi, unduh file dan gunakan opsi unggah Excel/CSV.
- JSON menerima format hasil ekspor dashboard, termasuk rincian gangguan.
- Impor memperbarui Data kerja. Dashboard meminta konfirmasi jika kuncinya
  sudah ada di data Excel dasar atau di isian browser.
