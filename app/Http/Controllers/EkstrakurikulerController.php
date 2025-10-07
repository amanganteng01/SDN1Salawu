<?php

namespace App\Http\Controllers;

use App\Models\Ekstrakurikuler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EkstrakurikulerController extends Controller
{
    public function daftarEkstrakurikuler(){
        // Menampilkan semua data ekstrakurikuler
        $ekstrakurikuler = Ekstrakurikuler::all();
        // Menampilkan halaman daftar ekstrakurikuler dengan data yang telah diambil
        return inertia('Ekstrakurikuler/DaftarEkstrakurikuler', ['ekstrakurikuler' => $ekstrakurikuler]);
    }

    public function showEkstrakurikuler(String $id){
        // Mendapatkan data ekstrakurikuler berdasarkan id
        $ekstrakurikuler = Ekstrakurikuler::findOrFail($id);
        // Menampilkan halaman detail ekstrakurikuler dengan data yang telah diambil
        return inertia('Ekstrakurikuler/DetailEkstrakurikuler', ['ekstrakurikuler' => $ekstrakurikuler]);
    }

    public function simpanEkstrakurikuler(Request $request){
        // Validasi inputan dari form tambah ekstrakurikuler
        $validasi = $request->validate([
            'nama' => 'required|string|max:100',
            'pembina' => 'required|string|max:100',
            'jadwal_latihan' => 'required|string|max:100',
            'deskripsi' => 'required|string',
            'gambar' => 'required|mimes:jpg,jpeg,png|max:5120',
        ]);

        // upload gambar
        $file = $request->file('gambar');
        // Menyimpan nama file gambar ke dalam validasi
        $filename = time().".".$file->getClientOriginalExtension();
        $file->storeAs('ekstrakurikuler', $filename);

        // Menyimpan nama file gambar ke dalam validasi
        $validasi['gambar'] = $filename;

        // Menyimpan data ekstrakurikuler ke database
        Ekstrakurikuler::create($validasi);

        // Mengembalikan ke halaman daftar ekstrakurikuler dengan pesan sukses
        return redirect('/admin/daftar/ekstrakurikuler');
    }

    public function updateEkstrakurikuler(Request $request, String $id){
        // Validasi inputan dari form edit ekstrakurikuler
        $validasi = $request->validate([
            'nama' => 'nullable|string|max:100',
            'pembina' => 'nullable|string|max:100',
            'jadwal_latihan' => 'nullable|string|max:100',
            'deskripsi' => 'nullable|string',
            'gambar' => 'nullable|mimes:jpg,jpeg,png|max:5120',
        ]);

        // Mendapatkan data ekstrakurikuler berdasarkan id
        $ekstrakurikuler = Ekstrakurikuler::findOrFail($id);

        //upload file baru jika ada
        if ($request->hasFile('gambar')) {
            if (Storage::exists('ekstrakurikuler/'.$ekstrakurikuler->gambar)) {
                Storage::delete('ekstrakurikuler/'.$ekstrakurikuler->gambar);
            }
            $file = $request->file('gambar');
            $filename = time().".".$file->getClientOriginalExtension();
            $file->storeAs('ekstrakurikuler', $filename);
            $validasi['gambar'] = $filename;
        } else {
            $validasi['gambar'] = $ekstrakurikuler->gambar;
        }

        // Menyimpan data ekstrakurikuler ke database
        $ekstrakurikuler->update($validasi);

        // Mengembalikan ke halaman daftar ekstrakurikuler dengan pesan sukses
        return redirect('/admin/daftar/ekstrakurikuler');
    }

    public function hapusEkstrakurikuler(String $id){
        // Mendapatkan data ekstrakurikuler berdasarkan id
        $ekstrakurikuler = Ekstrakurikuler::findOrFail($id);
        if (Storage::exists('ekstrakurikuler/'.$ekstrakurikuler->gambar)) {
            Storage::delete('ekstrakurikuler/'.$ekstrakurikuler->gambar);
        }
        // Menghapus data ekstrakurikuler dari database
        $ekstrakurikuler->delete();
        // Mengembalikan ke halaman daftar ekstrakurikuler dengan pesan sukses
        return redirect('/admin/daftar/ekstrakurikuler');
    }
}
