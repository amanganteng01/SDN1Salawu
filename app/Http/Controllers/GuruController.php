<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuruController extends Controller
{
    public function daftarGuru(){
        $guru = Guru::all();
        return Inertia::render('DaftarGuru', [ 'guru' => $guru ]);
    }

    public function tambahGuru(){
        return Inertia::render('TambahGuru');
    }

    public function simpanGuru(Request $request){
        $validasi = $request->validate([
            'nama' => 'required|string|max:40',
            'nip' => 'required|string|max:20',
            'mapel' => 'required|string|max:30',
        ]);

        $validasi['foto'] = 'p';

        Guru::create($validasi);

        return redirect('/admin/daftar/guru');
    }
}
