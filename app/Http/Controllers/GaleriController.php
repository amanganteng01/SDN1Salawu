<?php

namespace App\Http\Controllers;

use App\Models\Galeri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GaleriController extends Controller
{
    public function daftarGaleri(){
        //menampilkan semua data galeri
        $galeri = Galeri::all();
        //menampilkan halaman daftar galeri dengan data yang telah diambil
        return inertia('Galeri/DaftarGaleri', ['galeri' => $galeri]);
    }

    public function showGaleri(String $id){
        // Mendapatkan data galeri berdasarkan id
        $galeri = Galeri::findOrFail($id);
        // Menampilkan halaman detail galeri dengan data yang telah diambil
        return inertia('Galeri/DetailGaleri', ['galeri' => $galeri]);
    }

    public function simpanGaleri(Request $request){
        // Validasi inputan dari form tambah galeri
        $validasi = $request->validate([
            'judul' => 'required|string|max:100',
            'keterangan' => 'required|string|max:255',
            'file' => 'required|mimes:jpg,jpeg,png,gif,mp4,mov,avi,mkv|max:204800',
            'kategori' => 'required|string|max:50',
            'tanggal' => 'required|date',
        ]);

        //upload file
        $file = $request->file('file');
        // Memberi nama file dengan timestamp agar unik
        $filename = time().".".$file->getClientOriginalExtension();
        $file->storeAs('galeri', $filename);

        // Menyimpan nama file gambar ke dalam validasi
        $validasi['file'] = $filename;

        // Menyimpan data galeri ke database
        Galeri::create($validasi);

        // Mengembalikan ke halaman daftar galeri dengan pesan sukses
        return redirect('/admin/daftar/galeri')->with('success', 'Data galeri berhasil ditambahkan.');
    }

    public function updateGaleri(Request $request, String $id){
        // Validasi inputan dari form edit galeri
        $validasi = $request->validate([
            'judul' => 'nullable|string|max:100',
            'keterangan' => 'nullable|string|max:255',
            'file' => 'nullable|mimes:jpg,jpeg,png,gif,mp4,mov,avi,mkv|max:204800',
            'kategori' => 'nullable|string|max:50',
            'tanggal' => 'nullable|date',
        ]);

        // Mendapatkan data galeri berdasarkan id
        $galeri = Galeri::findOrFail($id);

        //upload file baru jika ada
        if ($request->hasFile('file')) {
            if (Storage::exists('galeri/'.$galeri->file)) {
                Storage::delete('galeri/'.$galeri->file);
            }
            $file = $request->file('file');
            // Memberi nama file dengan timestamp agar unik
            $filename = time().".".$file->getClientOriginalExtension();
            $file->storeAs('galeri', $filename);

            $validasi['file'] = $filename;
        } else {
            $validasi['file'] = $galeri->file;
        }

        // Mengupdate data galeri di database
        $galeri->update($validasi);

        // Mengembalikan ke halaman daftar galeri dengan pesan sukses
        return redirect('/admin/daftar/galeri')->with('success', 'Data galeri berhasil diupdate.');
    }
    
    public function hapusGaleri(String $id){
        // Mendapatkan data galeri berdasarkan id
        $galeri = Galeri::findOrFail($id);
        if (Storage::exists('galeri/'.$galeri->file)) {
            Storage::delete('galeri/'.$galeri->file);
        }
        // Menghapus data galeri dari database
        $galeri->delete();
        // Mengembalikan ke halaman daftar galeri dengan pesan sukses
        return redirect('/admin/daftar/galeri')->with('success', 'Data galeri berhasil dihapus.');
    }
}
