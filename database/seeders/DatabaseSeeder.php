<?php

namespace Database\Seeders;

use App\Models\FasilitasDanSarana;
use App\Models\Guru;
use App\Models\Komitmen;
use App\Models\PencapaianDanPrestasi;
use App\Models\ProfilSekolah;
use App\Models\User;
use App\Models\Galeri;
use App\Models\Berita;
use App\Models\Ekstrakurikuler;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'name' => 'Kepala Sekolah',
            'username' => 'admin123',
            'password' => bcrypt('123'),
            'role' => 'Admin',
        ]);
        User::create([
            'name' => 'Guru 1',
            'username' => 'guru1',
            'password' => bcrypt('guru1'),
            'role' => 'Operator',
        ]);
        ProfilSekolah::create([
            'nama_sekolah' => 'SMA Negeri 4 Tasikmalaya',
            'kepala_sekolah' => 'Drs. H. Ahmad Fauzi, M.Pd.',
            'foto' => 'sma4-tasikmalaya-gedung.jpg',
            'logo' => 'logo-sma4-tasikmalaya.png',
            'npsn' => '20247891',
            'alamat' => 'Jl. Pahlawan No. 45, Kec. Kawalu, Kota Tasikmalaya, Jawa Barat 46182',
            'kontak' => '(0265) 234567 | 081334455667',
            'visi' => 'Menjadi SMA unggulan yang menghasilkan lulusan berakhlak mulia, berprestasi akademik, dan siap bersaing di tingkat nasional',
            'misi' => "1. Menyelenggarakan pendidikan menengah yang berkualitas dan berkarakter\n
                2. Mengembangkan potensi akademik dan non-akademik siswa secara optimal\n
                3. Mempersiapkan siswa untuk melanjutkan ke perguruan tinggi ternama\n
                4. Membangun lingkungan belajar yang kondusif dan inspiratif\n
                5. Menanamkan nilai-nilai leadership dan entrepreneurship",
            'tahun_berdiri' => '1995',
            'deskripsi' => 'SMA Negeri 4 Tasikmalaya merupakan sekolah menengah atas negeri yang berkomitmen untuk mencetak generasi muda yang cerdas, berkarakter, dan berdaya saing. Dengan kurikulum yang terintegrasi dan fasilitas pendidikan yang modern, kami siap membimbing siswa untuk meraih prestasi optimal baik di bidang akademik maupun non-akademik.',
            'nilai_budaya' => "1. Integritas: Menjunjung tinggi kejujuran dan moralitas\n
                2. Excellence: Berorientasi pada prestasi terbaik\n
                3. Leadership: Mengembangkan jiwa kepemimpinan\n
                4. Innovation: Mendorong inovasi dan kreativitas\n
                5. Collaboration: Membangun kerjasama tim yang solid",
        ]);
        FasilitasDanSarana::create([
            'nama_fasilitas' => 'Perpustakaan',
        ]);
        FasilitasDanSarana::create([
            'nama_fasilitas' => 'Laboratorium Komputer',
        ]);
        FasilitasDanSarana::create([
            'nama_fasilitas' => 'Lapangan Olahraga',
        ]);
        PencapaianDanPrestasi::create([
            'pencapaian' => 'Juara 1 Lomba Cerdas Cermat Tingkat Kabupaten',
        ]);
        Komitmen::create([
            'judul' => 'Pendidikan Berkualitas',
            'deskripsi' => 'Kami berkomitmen untuk memberikan pendidikan berkualitas yang dapat membentuk karakter dan meningkatkan potensi akademik siswa-siswi kami.',
        ]);
        Komitmen::create([
            'judul' => 'Lingkungan Belajar yang Aman dan Nyaman',
            'deskripsi' => 'Kami menciptakan lingkungan belajar yang aman, nyaman, dan kondusif bagi seluruh siswa-siswi kami.',
        ]);
        Komitmen::create([
            'judul' => 'Pengembangan Potensi Siswa',
            'deskripsi' => 'Kami berkomitmen untuk mengembangkan potensi setiap siswa melalui berbagai program ekstrakurikuler dan kegiatan pembelajaran yang inovatif.',
        ]);
        Guru::create([
            'nama' => 'Guru 1',
            'nip' => '1234567890',
            'mapel' => 'Matematika',
            'foto' => 'guru1.jpg',
        ]);
        Guru::create([
            'nama' => 'Guru 2',
            'nip' => '1234567891',
            'mapel' => 'PAI',
            'foto' => 'guru2.jpg',
        ]);

        // Seeder untuk Galeri
        $galeris = [
            [
                'judul' => 'Galeri 1 - Upacara Bendera',
                'keterangan' => 'Kegiatan upacara bendera setiap hari Senin yang diikuti oleh seluruh siswa dan guru',
                'file' => 'upacara-bendera.jpg',
                'kategori' => 'foto',
                'tanggal' => '2024-01-15',
            ],
            [
                'judul' => 'Galeri 2 - Lomba 17 Agustus',
                'keterangan' => 'Berbagai perlombaan dalam rangka memperingati HUT RI ke-78',
                'file' => 'lomba-17agustus.jpg',
                'kategori' => 'foto',
                'tanggal' => '2024-08-17',
            ],
            [
                'judul' => 'Galeri 3 - Pentas Seni',
                'keterangan' => 'Pentas seni tahunan menampilkan bakat dan kreativitas siswa',
                'file' => 'pentas-seni.jpg',
                'kategori' => 'foto',
                'tanggal' => '2024-03-20',
            ],
            [
                'judul' => 'Galeri 4 - Video Profil Sekolah',
                'keterangan' => 'Video profil lengkap tentang SMA Negeri 4 Tasikmalaya',
                'file' => 'profil-sekolah.mp4',
                'kategori' => 'video',
                'tanggal' => '2024-02-10',
            ],
            [
                'judul' => 'Galeri 5 - Study Tour',
                'keterangan' => 'Kegiatan study tour ke museum dan tempat bersejarah',
                'file' => 'study-tour.jpg',
                'kategori' => 'foto',
                'tanggal' => '2024-11-05',
            ],
            [
                'judul' => 'Galeri 6 - Video Kegiatan OSIS',
                'keterangan' => 'Dokumentasi kegiatan organisasi siswa intra sekolah',
                'file' => 'kegiatan-osis.mp4',
                'kategori' => 'video',
                'tanggal' => '2024-09-12',
            ],
        ];

        foreach ($galeris as $galeri) {
            Galeri::create($galeri);
        }

        // Seeder untuk Berita
        $beritas = [
            [
                'judul' => 'Berita 1 - SMA Negeri 4 Tasikmalaya Raih Juara Olimpiade Matematika',
                'isi' => 'SMA Negeri 4 Tasikmalaya berhasil meraih juara 1 dalam Olimpiade Matematika Tingkat Provinsi Jawa Barat. Prestasi ini membanggakan seluruh warga sekolah dan menjadi motivasi bagi siswa lainnya.',
                'tanggal' => '2024-01-10',
                'gambar' => 'olimpiade-matematika.jpg',
                'user_id' => 1,
            ],
            [
                'judul' => 'Berita 2 - Kegiatan Bakti Sosial ke Panti Asuhan',
                'isi' => 'Siswa-siswi SMA Negeri 4 Tasikmalaya mengadakan kegiatan bakti sosial ke Panti Asuhan Harapan Bangsa. Kegiatan ini bertujuan untuk melatih kepedulian sosial siswa.',
                'tanggal' => '2024-02-15',
                'gambar' => 'baksos-panti.jpg',
                'user_id' => 1,
            ],
            [
                'judul' => 'Berita 3 - Workshop Kewirausahaan untuk Siswa',
                'isi' => 'SMA Negeri 4 Tasikmalaya menyelenggarakan workshop kewirausahaan dengan menghadirkan pengusaha sukses sebagai pembicara. Workshop ini bertujuan untuk menumbuhkan jiwa entrepreneur siswa.',
                'tanggal' => '2024-03-22',
                'gambar' => 'workshop-kewirausahaan.jpg',
                'user_id' => 1,
            ],
            [
                'judul' => 'Berita 4 - Penerimaan Peserta Didik Baru Tahun 2024',
                'isi' => 'Pendaftaran Penerimaan Peserta Didik Baru (PPDB) SMA Negeri 4 Tasikmalaya tahun ajaran 2024/2025 telah dibuka. Segera daftarkan putra-putri Anda untuk bergabung dengan keluarga besar SMA Negeri 4 Tasikmalaya.',
                'tanggal' => '2024-04-01',
                'gambar' => 'ppdb-2024.jpg',
                'user_id' => 1,
            ],
            [
                'judul' => 'Berita 5 - Kelulusan 100% Angkatan 2024',
                'isi' => 'Seluruh siswa angkatan 2024 SMA Negeri 4 Tasikmalaya dinyatakan lulus 100% dengan nilai yang memuaskan. Prestasi ini merupakan hasil dari kerja keras siswa dan dukungan para guru.',
                'tanggal' => '2024-05-02',
                'gambar' => 'kelulusan-2024.jpg',
                'user_id' => 1,
            ],
            [
                'judul' => 'Berita 6 - Peresmian Laboratorium Bahasa Baru',
                'isi' => 'SMA Negeri 4 Tasikmalaya meresmikan laboratorium bahasa baru dengan fasilitas modern untuk mendukung pembelajaran bahasa asing yang lebih efektif dan menyenangkan.',
                'tanggal' => '2024-06-18',
                'gambar' => 'lab-bahasa-baru.jpg',
                'user_id' => 1,
            ],
        ];

        foreach ($beritas as $berita) {
            Berita::create($berita);
        }

        // Seeder untuk Ekstrakurikuler
        $ekstrakurikulers = [
            [
                'nama' => 'Ekstrakurikuler 1 - Paskibra',
                'pembina' => 'Bapak Rudi Hartono, S.Pd.',
                'jadwal_latihan' => 'Sabtu, 07.00 - 09.00 WIB',
                'deskripsi' => 'Ekstrakurikuler Paskibra melatih kedisiplinan, kekompakan, dan rasa cinta tanah air melalui berbagai kegiatan baris-berbaris dan pengibaran bendera.',
                'gambar' => 'paskibra.jpg',
            ],
            [
                'nama' => 'Ekstrakurikuler 2 - Palang Merah Remaja (PMR)',
                'pembina' => 'Ibu Siti Aminah, S.Kep.',
                'jadwal_latihan' => 'Jumat, 14.00 - 16.00 WIB',
                'deskripsi' => 'PMR melatih siswa dalam bidang kesehatan dan pertolongan pertama, serta mengembangkan jiwa sosial dan kemanusiaan.',
                'gambar' => 'pmr.jpg',
            ],
            [
                'nama' => 'Ekstrakurikuler 3 - KIR (Karya Ilmiah Remaja)',
                'pembina' => 'Bapak Drs. Ahmad Yani, M.Si.',
                'jadwal_latihan' => 'Rabu, 15.00 - 17.00 WIB',
                'deskripsi' => 'KIR mengembangkan kemampuan siswa dalam penelitian ilmiah, menulis karya tulis, dan berpartisipasi dalam berbagai lomba sains.',
                'gambar' => 'kir.jpg',
            ],
            [
                'nama' => 'Ekstrakurikuler 4 - Basket',
                'pembina' => 'Bapak Andi Prasetyo, S.Pd.',
                'jadwal_latihan' => 'Selasa & Kamis, 16.00 - 18.00 WIB',
                'deskripsi' => 'Ekstrakurikuler basket melatih keterampilan bermain bola basket, kerja sama tim, dan menjaga kebugaran fisik siswa.',
                'gambar' => 'basket.jpg',
            ],
            [
                'nama' => 'Ekstrakurikuler 5 - Teater',
                'pembina' => 'Ibu Maya Sari, S.Sn.',
                'jadwal_latihan' => 'Senin, 15.00 - 17.00 WIB',
                'deskripsi' => 'Ekstrakurikuler teater mengembangkan bakat seni peran, public speaking, dan kreativitas siswa dalam berkesenian.',
                'gambar' => 'teater.jpg',
            ],
            [
                'nama' => 'Ekstrakurikuler 6 - Pramuka',
                'pembina' => 'Bapak Joko Susilo, S.Pd.',
                'jadwal_latihan' => 'Sabtu, 13.00 - 16.00 WIB',
                'deskripsi' => 'Gerakan Pramuka melatih kemandirian, kepemimpinan, dan keterampilan hidup melalui berbagai kegiatan kepramukaan yang menarik.',
                'gambar' => 'pramuka.jpg',
            ],
        ];

        foreach ($ekstrakurikulers as $ekstrakurikuler) {
            Ekstrakurikuler::create($ekstrakurikuler);
        }
    }
}