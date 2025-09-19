<?php

use App\Http\Controllers\AdminViewController;
use App\Http\Controllers\GuruController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ViewController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ViewController::class, 'beranda']);
Route::get('/profilsekolah', [ViewController::class, 'profilSekolah']);
Route::get('/ekstrakurikuler', [ViewController::class, 'ekstrakurikuler']);

Route::get('/login', [LoginController::class, 'tampilanLogin']);

Route::get('/admin/daftar/guru', [GuruController::class, 'daftarGuru']);
Route::get('/admin/tambah/guru', [GuruController::class, 'tambahGuru']);
Route::post('/admin/simpan/guru', [GuruController::class, 'simpanGuru']);
