<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Ekstrakurikuler;
use App\Models\Galeri;
use App\Models\Guru;
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
        $galeri = Galeri::orderBy("created_at", "desc")->get();
        $ekskul = Ekstrakurikuler::orderBy("created_at","desc")->take(6)->get();
        $berita = Berita::orderBy("created_at","desc")->take(3)->get();
        // Mengembalikan ke halaman beranda dengan data yang telah diambil
        return Inertia::render("Beranda", ['jumlahguru'=> $guru->count(), 'jumlahsiswa' => $siswa->count(), 'profil' => $profil, 'galeri' => $galeri, 'ekskul' => $ekskul, 'berita' => $berita ]);
    }

    public function profilSekolah(){
        // Mengembalikan ke halaman profil sekolah
        return Inertia::render("ProfilSekolah");
    }

    public function ekstrakurikuler(){
        // Mengembalikan ke halaman ekstrakurikuler
        return Inertia::render("Ekstrakurikuler");
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
