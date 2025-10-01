<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class GuruController extends Controller
{
    public function daftarGuru(){
        $guru = Guru::all();
        return Inertia::render('Guru/DaftarGuru', [ 'guru' => $guru ]);
    }
    
    public function showGuru(String $id){
        $guru = Guru::findOrFail($id);
        return Inertia::render('Guru/DetailGuru', [ 'guru' => $guru ]);
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

        return redirect('/admin/daftar/guru')->with('success', 'Data guru berhasil ditambahkan.');
    }

    public function updateGuru(Request $request, String $id){
        $validasi = $request->validate([
            'nama' => 'nullable|string|max:40',
            'nip' => 'nullable|string|max:20',
            'mapel' => 'nullable|string|max:30',
            'foto' => 'nullable|image|mimes:png,jpg,jpeg|max:5120'
        ]);

        $guru = Guru::findOrFail($id);

        //upload foto baru jika ada
        if ($request->hasFile('foto')) {
            if (Storage::exists('guru/'.$guru->foto)) {
                Storage::delete('guru/'.$guru->foto);
            }
            $foto = $request->file('foto');
            $filename = time().".".$foto->getClientOriginalExtension();
            $foto->storeAs('guru', $filename);

            $validasi['foto'] = $filename;
        }else{
            $validasi['foto'] = $guru->foto;
        }

        $guru->update($validasi);
        return redirect('/admin/daftar/guru')->with('success', 'Data guru berhasil diperbarui.');
    }

    public function hapusGuru(String $id){
        Guru::find($id)->delete();
        return redirect('/admin/daftar/guru');
    }


}
