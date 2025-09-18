<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ViewController extends Controller
{
    public function beranda(){
        return Inertia::render("Beranda");
    }

    public function profilsekolah(){
        return Inertia::render("ProfilSekolah");
    }

    public function ekstrakurikuler(){
        return Inertia::render("Ekstrakurikuler");
    }
}
