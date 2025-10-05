<?php

namespace Database\Seeders;

use App\Models\FasilitasDanSarana;
use App\Models\Guru;
use App\Models\Komitmen;
use App\Models\PencapaianDanPrestasi;
use App\Models\ProfilSekolah;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

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
            'nama_sekolah' => 'SDN 1 Salawu',
            'kepala_sekolah' => 'Drs. Asep Saepudin, M.Pd.',
            'foto' => 'sdn1-salawu-gedung.jpg',
            'logo' => 'logo-sdn1-salawu.png',
            'npsn' => '20234567',
            'alamat' => 'Jl. Raya Salawu No. 15, Kec. Salawu, Kab. Tasikmalaya, Jawa Barat 46471',
            'kontak' => '(0265) 123456 | 081223344556',
            'visi' => 'Menjadi sekolah dasar unggulan yang mencetak generasi berakhlak mulia, berprestasi, dan peduli lingkungan',
            'misi' => "1. Menyelenggarakan pendidikan dasar yang bermutu dan berkarakter Islami\n
                2. Mengembangkan potensi akademik dan bakat siswa sejak dini\n
                3. Menciptakan lingkungan belajar yang aman, nyaman, dan menyenangkan\n
                4. Membangun kerjasama yang harmonis antara sekolah, orang tua, dan masyarakat\n
                5. Menanamkan nilai-nilai cinta lingkungan dan kepedulian sosial",
            'tahun_berdiri' => '1980',
            'deskripsi' => 'SDN 1 Salawu merupakan salah satu sekolah dasar negeri terbaik di Kecamatan Salawu yang telah berdiri sejak tahun 1980. Kami berkomitmen untuk memberikan pendidikan dasar yang berkualitas dengan mengintegrasikan nilai-nilai agama, akademik, dan karakter. Dengan tenaga pendidik yang berpengalaman dan fasilitas yang memadai, kami siap membentuk generasi penerus yang berakhlak mulia dan berprestasi.',
            'nilai_budaya' => "1. Religius: Mengamalkan nilai-nilai agama dalam kehidupan sehari-hari\n
                2. Jujur: Menanamkan kejujuran dalam perkataan dan perbuatan\n
                3. Disiplin: Membiasakan kedisiplinan dalam belajar dan beraktivitas\n
                4. Peduli: Mengembangkan rasa peduli terhadap sesama dan lingkungan\n
                5. Kreatif: Mendorong kreativitas dan inovasi dalam belajar",
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
    }
}
