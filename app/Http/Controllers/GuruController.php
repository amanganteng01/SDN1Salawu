<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class GuruController extends Controller
{
    public function daftarGuru(){
        // Menampilkan semua data guru
        $guru = Guru::all();
        // Menampilkan halaman daftar guru dengan data yang telah diambil
        return Inertia::render('Guru/DaftarGuru', [ 'guru' => $guru ]);
    }

    public function showGuru(String $id){
        // Mendapatkan data guru berdasarkan id
        $guru = Guru::findOrFail($id);
        // Menampilkan halaman detail guru dengan data yang telah diambil
        return Inertia::render('Guru/DetailGuru', [ 'guru' => $guru ]);
    }

    public function simpanGuru(Request $request){
        // Validasi inputan dari form tambah guru
        $validasi = $request->validate([
            'nama' => 'required|string|max:40',
            'nip' => 'required|string|max:20|unique:gurus,nip|min:10|max:10',
            'mapel' => 'required|string|max:30',
            'foto' => 'required|image|mimes:png,jpg,jpeg,webp|max:5120'
        ]);
        // upload foto
        $foto = $request->file('foto');
        // Memberi nama file dengan timestamp agar unik
        $filename = time().".".$foto->getClientOriginalExtension();
        $foto->storeAs('guru', $filename);

        // Menyimpan nama file gambar ke dalam validasi
        $validasi['foto'] = $filename;

        // Menyimpan data guru ke database
        Guru::create($validasi);

        // Mengembalikan ke halaman daftar guru
        return redirect('/admin/daftar/guru');
    }

    public function updateGuru(Request $request, String $id){
        // Validasi inputan dari form edit guru
        $validasi = $request->validate([
            'nama' => 'nullable|string|max:40',
            'nip' => 'nullable|string|max:20|unique:gurus,nip|min:10|max:10',
            'mapel' => 'nullable|string|max:30',
            'foto' => 'nullable|image|mimes:png,jpg,jpeg,webp|max:5120'
        ]);


        // Mendapatkan data guru berdasarkan id
        $guru = Guru::findOrFail($id);

        if (!$validasi['nip']) {
            $validasi['nip'] = $guru->nip;
        }
        //upload foto baru jika ada
        if ($request->hasFile('foto')) {
            if (Storage::exists('guru/'.$guru->foto)) {
                Storage::delete('guru/'.$guru->foto);
            }
            $foto = $request->file('foto');
            // Memberi nama file dengan timestamp agar unik
            $filename = time().".".$foto->getClientOriginalExtension();
            $foto->storeAs('guru', $filename);

            $validasi['foto'] = $filename;
        }else{
            $validasi['foto'] = $guru->foto;
        }

        // Menyimpan data guru ke database
        $guru->update($validasi);
        // Mengembalikan ke halaman daftar guru
        return redirect('/admin/daftar/guru');
    }

    public function hapusGuru(String $id){
        // Menghapus data guru berdasarkan id
        Guru::find($id)->delete();
        // Mengembalikan ke halaman daftar guru
        return redirect('/admin/daftar/guru');
    }


}
