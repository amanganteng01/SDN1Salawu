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
            'foto' => 'required|image|mimes:png,jpg,jpeg|max:5120'
        ]);
        $foto = $request->file('foto');
        $filename = time().".".$foto->getClientOriginalExtension();
        $foto->storeAs('guru', $filename);

        $validasi['foto'] = $filename;

        Guru::create($validasi);

        return redirect('/admin/daftar/guru');
    }

    public function hapusGuru(String $id){
        Guru::find($id)->delete();
        return redirect('/admin/daftar/guru');
    }
}
