<?php

use App\Http\Controllers\BeritaController;
use App\Http\Controllers\EkstrakurikulerController;
use App\Http\Controllers\GaleriController;
use App\Http\Controllers\GuruController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProfilSekolahController;
use App\Http\Controllers\SiswaController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ViewController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ViewController::class, 'beranda']);
Route::get('/profilsekolah', [ViewController::class, 'profilSekolah']);
Route::get('/ekstrakurikuler', [ViewController::class, 'ekstrakurikuler']);

Route::get('/login', [LoginController::class, 'tampilanLogin'])->name('login');
Route::post('/login/auth', [LoginController::class, 'authLogin']);

Route::middleware(['petugas'])->group(function() {
    Route::get('/admin/beranda', [ViewController::class, 'berandaAdmin'])->name('dashboard');

    // Route User
    Route::get('/admin/daftar/user', [UserController::class, 'daftarUser']);
    Route::post('/admin/simpan/user', [UserController::class, 'simpanUser']);
    Route::post('/admin/update/user/{id}', [UserController::class, 'updateUser']);
    Route::delete('/admin/hapus/user/{id}', [UserController::class, 'hapusUser']);

    //Route Guru
    Route::get('/admin/daftar/guru', [GuruController::class, 'daftarGuru']);
    Route::get('/admin/show/guru/{id}', [GuruController::class, 'showGuru']);
    Route::post('/admin/simpan/guru', [GuruController::class, 'simpanGuru']);
    Route::post('/admin/update/guru/{id}', [GuruController::class, 'updateGuru']);
    Route::delete('/admin/hapus/guru/{id}', [GuruController::class, 'hapusGuru']);

    //Route Siswa
    Route::get('/admin/daftar/siswa', [SiswaController::class, 'daftarSiswa']);
    Route::post('/admin/simpan/siswa', [SiswaController::class, 'simpanSiswa']);
    Route::post('/admin/update/siswa/{id}', [SiswaController::class, 'updateSiswa']);
    Route::delete('/admin/hapus/siswa/{id}', [SiswaController::class, 'hapusSiswa']);

    // Route Galeri
    Route::get('/admin/daftar/galeri', [GaleriController::class, 'daftarGaleri']);
    Route::get('/admin/show/galeri/{id}', [GaleriController::class, 'showGaleri']);
    Route::post('/admin/simpan/galeri', [GaleriController::class, 'simpanGaleri']);
    Route::post('/admin/update/galeri/{id}', [GaleriController::class, 'updateGaleri']);
    Route::delete('/admin/hapus/galeri/{id}', [GaleriController::class, 'hapusGaleri']);

    // Route Berita
    Route::get('/admin/daftar/berita', [BeritaController::class, 'daftarBerita']);
    Route::get('/admin/show/berita/{id}', [BeritaController::class, 'showBerita']);
    Route::post('/admin/simpan/berita', [BeritaController::class, 'simpanBerita']);
    Route::post('/admin/update/berita/{id}', [BeritaController::class, 'updateBerita']);
    Route::delete('/admin/hapus/berita/{id}', [BeritaController::class, 'hapusBerita']);

    // Route Eskul
    Route::get('/admin/daftar/ekstrakurikuler', [EkstrakurikulerController::class, 'daftarEkstrakurikuler']);
    Route::get('/admin/show/ekstrakurikuler/{id}', [EkstrakurikulerController::class, 'showEkstrakurikuler']);
    Route::post('/admin/simpan/ekstrakurikuler', [EkstrakurikulerController::class, 'simpanEkstrakurikuler']);
    Route::post('/admin/update/ekstrakurikuler/{id}', [EkstrakurikulerController::class, 'updateEkstrakurikuler']);
    Route::delete('/admin/hapus/ekstrakurikuler/{id}', [EkstrakurikulerController::class, 'hapusEkstrakurikuler']);

    // Route Profil Sekolah
    Route::get('/admin/daftar/profil/sekolah', [ProfilSekolahController::class, 'daftarProfilSekolah']);
    Route::get('/admin/show/profil/sekolah/{id}', [ProfilSekolahController::class, 'showProfilSekolah']);
    Route::post('/admin/simpan/profil/sekolah', [ProfilSekolahController::class, 'simpanProfilSekolah']);
    Route::post('/admin/update/profil/sekolah/{id}', [ProfilSekolahController::class, 'updateProfilSekolah']);
    Route::delete('/admin/hapus/profil/sekolah/{id}', [ProfilSekolahController::class, 'hapusProfilSekolah']);

    Route::post('/logout', [LoginController::class, 'logout'])->name('logout');
});
