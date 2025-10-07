<?php

namespace App\Http\Controllers;

use App\Models\Siswa;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiswaController extends Controller
{
    public function daftarSiswa(){
        // Menampilkan semua data siswa
        $siswa = Siswa::all();
        // Menampilkan halaman daftar siswa dengan data yang telah diambil
        return Inertia::render('Siswa/DaftarSiswa', [ 'siswa' => $siswa ]);
    }

    public function simpanSiswa(Request $request){
        // Validasi inputan dari form tambah siswa
        $validasi = $request->validate([
            'nisn' => 'required|string|max:20|unique:siswas,nisn|min:11|max:11',
            'nama_siswa' => 'required|string|max:40',
            'jenis_kelamin' => 'required|string|max:10',
            'tahun_masuk' => 'required|integer',

        ]);

        // Menyimpan data siswa ke database
        Siswa::create($validasi);

        // Mengembalikan ke halaman daftar siswa dengan pesan sukses
        return redirect('/admin/daftar/siswa');
    }

    public function updateSiswa(Request $request, String $id){
        // Validasi inputan dari form edit siswa
        $validasi = $request->validate([
            'nisn' => 'nullable|string|max:20|unique:siswas,nisn|min:11|max:11',
            'nama_siswa' => 'nullable|string|max:40',
            'jenis_kelamin' => 'nullable|string|max:10',
            'tahun_masuk' => 'nullable|integer',

        ]);

        // Mendapatkan data siswa berdasarkan id
        $siswa = Siswa::findOrFail($id);

        if (!$validasi['nisn']) {
            $validasi['nisn'] = $siswa->nisn;
        }

        // Memperbarui data siswa
        $siswa->update($validasi);
        // Mengembalikan ke halaman daftar siswa dengan pesan sukses
        return redirect('/admin/daftar/siswa');
    }

    public function hapusSiswa(String $id){
        // Mendapatkan data siswa berdasarkan id
        $siswa = Siswa::findOrFail($id);
        // Menghapus data siswa dari database
        $siswa->delete();
        // Mengembalikan ke halaman daftar siswa dengan pesan sukses
        return redirect('/admin/daftar/siswa');
    }
}
