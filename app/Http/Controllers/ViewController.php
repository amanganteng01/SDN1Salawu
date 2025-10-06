<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Ekstrakurikuler;
use App\Models\FasilitasDanSarana;
use App\Models\Galeri;
use App\Models\Guru;
use App\Models\PencapaianDanPrestasi;
use App\Models\ProfilSekolah;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ViewController extends Controller
{
    public function beranda(){
        // Mengambil data profil sekolah, guru, siswa, galeri, ekstrakurikuler, dan berita
        $profil = ProfilSekolah::first();
        $guru = Guru::all();
        $siswa = Siswa::all();
        $galeri = Galeri::orderBy("created_at", "desc")->take(6)->get();
        $ekskul = Ekstrakurikuler::orderBy("created_at","desc")->take(6)->get();
        $berita = Berita::orderBy("created_at","desc")->take(6)->get();
        // Mengembalikan ke halaman beranda dengan data yang telah diambil
        return Inertia::render("Beranda", ['jumlahguru'=> $guru->count(), 'jumlahsiswa' => $siswa->count(), 'profil' => $profil, 'galeri' => $galeri, 'ekskul' => $ekskul, 'berita' => $berita ]);
    }

    public function berita() {
        // Mengambil data berita dari yang terbaru
        $berita = Berita::orderBy("created_at", "desc")->get();
        // Mengembalikan ke halaman berita dengan data yang sudah diambil
        return Inertia::render("Berita", ['berita' => $berita]);
    }

    public function guru(){
        $guru = Guru::all();
        return Inertia::render('Guru', ['guru' => $guru]);
    }

    public function galeri(){
        // Mengambil data galeri dari yang terbaru
        $galeri = Galeri::orderBy("created_at", "desc")->get();
        // Mengembalikan ke halaman galeri dengan data yang sudah diambil
        return Inertia::render("Galeri", ['galeri' => $galeri]);
    }

    public function ekstrakurikuler(){
        // Mengambil data ekstrakurikuler
        $ekstrakurikuler = Ekstrakurikuler::all();
        // Mengembalikan ke halaman ekstrakurikuler dengan data yang sudah diambil
        return Inertia::render("Ekstrakurikuler", ['ekskul' => $ekstrakurikuler]);
    }

    public function tentangKami(){
        // Mengambil 3 data fasilitas dan sarana terbaru
        $fasilitas = FasilitasDanSarana::orderBy("created_at", "desc")->limit(3)->get();
        // Mengambil 3 data pencapaian dan prestasi terbaru
        $pencapaian = PencapaianDanPrestasi::orderBy("created_at", "desc")->limit(3)->get();
        // Mengambil data profil sekolah
        $profil = ProfilSekolah::first();
        // Mengembalikan ke halaman tentang kami dengan data yang sudah diambil
        return Inertia::render("TentangKami", ['profil' => $profil, 'pencapaian' => $pencapaian, 'fasilitas' => $fasilitas]);
    }

    public function berandaAdmin() {
        // Mengambil data jumlah guru, siswa, ekstrakurikuler, dan berita
        $jumlahguru = Guru::all()->count();
        $jumlahsiswa = Siswa::all()->count();
        $jumlahekskul = Ekstrakurikuler::all()->count();
        $jumlahberita = Berita::all()->count();
        $level = Auth::user()->role;
        // Mengembalikan ke halaman beranda admin dengan data yang telah diambil
        return Inertia::render("Dashboard", ['jumlahguru' => $jumlahguru, 'jumlahsiswa' => $jumlahsiswa, 'jumlahekskul' => $jumlahekskul, 'jumlahberita' => $jumlahberita, 'level' => $level] );
    }
}
