<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ViewController extends Controller
{
    public function beranda(){
        return Inertia::render("Beranda");
    }

    public function profilSekolah(){
        return Inertia::render("ProfilSekolah");
    }

    public function ekstrakurikuler(){
        return Inertia::render("Ekstrakurikuler");
    }

    public function berandaAdmin() {
        return Inertia::render("Dashboard");
    }
}
