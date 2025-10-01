<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class BeritaController extends Controller
{
    public function daftarBerita(){
        // Mendapatkan Semua data berita
        $berita = Berita::all();
        // Mengembalikan ke halaman Daftar Berita dengan data berita
        return inertia('Berita/DaftarBerita', ['berita' => $berita]);
    }

    public function showBerita(String $id){
        // Mendapatkan data berita berdasarkan id
        $berita = Berita::findOrFail($id);
        // Mengembalikan ke halaman Detail Berita dengan data berita
        return inertia('Berita/DetailBerita', ['berita' => $berita]);
    }

    public function simpanBerita(Request $request){
        // Validasi inputan dari form tambah berita
        $validasi = $request->validate([
            'judul' => 'required|string|max:100',
            'isi' => 'required|string',
            'tanggal' => 'required|date',
            'gambar' => 'required|mimes:jpg,jpeg,png|max:5120',
        ]);

        // Menyimpan user_id dari user yang sedang login
        $validasi['user_id'] = Auth::user()->id;

        //upload gambar
        $file = $request->file('gambar');
        $filename = time().".".$file->getClientOriginalExtension();
        $file->storeAs('berita', $filename);

        // Menyimpan nama file gambar ke dalam validasi
        $validasi['gambar'] = $filename;

        // Menyimpan data berita ke database
        Berita::create($validasi);

        // Mengembalikan ke halaman daftar berita dengan pesan sukses
        return redirect('/admin/daftar/berita')->with('success', 'Data berita berhasil ditambahkan.');
    }

    public function updateBerita(Request $request, String $id){
        // Validasi inputan dari form edit berita
        $validasi = $request->validate([
            'judul' => 'nullable|string|max:100',
            'isi' => 'nullable|string',
            'tanggal' => 'nullable|date',
            'gambar' => 'nullable|mimes:jpg,jpeg,png|max:5120',
        ]);

        // Mendapatkan data berita berdasarkan id
        $berita = Berita::findOrFail($id);

        //upload file baru jika ada
        if ($request->hasFile('gambar')) {
            if (Storage::exists('berita/'.$berita->gambar)) {
                Storage::delete('berita/'.$berita->gambar);
            }
            $file = $request->file('gambar');
            $filename = time().".".$file->getClientOriginalExtension();
            $file->storeAs('berita', $filename);
            $validasi['gambar'] = $filename;
        } else {
            $validasi['gambar'] = $berita->gambar;
        }

        // Update data berita di database
        $berita->update($validasi);

        // Mengembalikan ke halaman daftar berita dengan pesan sukses
        return redirect('/admin/daftar/berita')->with('success', 'Data berita berhasil diupdate.');
    }

    public function hapusBerita(String $id){
        // Mendapatkan data berita berdasarkan id
        $berita = Berita::findOrFail($id);
        if (Storage::exists('berita/'.$berita->gambar)) {
            Storage::delete('berita/'.$berita->gambar);
        }
        // Menghapus data berita dari database
        $berita->delete();
        // Mengembalikan ke halaman daftar berita dengan pesan sukses
        return redirect('/admin/daftar/berita')->with('success', 'Data berita berhasil dihapus.');
    }
}
