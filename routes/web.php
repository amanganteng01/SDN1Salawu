<?php

use App\Http\Controllers\ViewController;
use Illuminate\Support\Facades\Route;

Route::get('', [ViewController::class, 'beranda']);
Route::get('profilsekolah', [ViewController::class, 'profilsekolah']);
Route::get('ekstrakurikuler', [ViewController::class, 'ekstrakurikuler']);
