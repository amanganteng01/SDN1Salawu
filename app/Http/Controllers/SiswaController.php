<?php

namespace App\Http\Controllers;

use App\Models\Siswa;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiswaController extends Controller
{
    public function daftarSiswa(){
        $siswa = Siswa::all();
        return Inertia::render('Siswa/DaftarSiswa', [ 'siswa' => $siswa ]);
    }

    public function simpanSiswa(Request $request){
        $validasi = $request->validate([
            'nisn' => 'required|string|max:20',
            'nama_siswa' => 'required|string|max:40',
            'jenis_kelamin' => 'required|string|max:10',
            'tahun_masuk' => 'required|integer',

        ]);

        Siswa::create($validasi);

        return redirect('/admin/daftar/siswa')->with('success', 'Data siswa berhasil ditambahkan.');
    }

    public function updateSiswa(Request $request, String $id){
        $validasi = $request->validate([
            'nisn' => 'nullable|string|max:20',
            'nama_siswa' => 'nullable|string|max:40',
            'jenis_kelamin' => 'nullable|string|max:10',
            'tahun_masuk' => 'nullable|integer',

        ]);

        $siswa = Siswa::findOrFail($id);
        $siswa->update($validasi);
        return redirect('/admin/daftar/siswa')->with('success', 'Data siswa berhasil diperbarui.');
    }

    public function hapusSiswa(String $id){
        $siswa = Siswa::findOrFail($id);
        $siswa->delete();
        return redirect('/admin/daftar/siswa')->with('success', 'Data siswa berhasil dihapus.');
    }
}
