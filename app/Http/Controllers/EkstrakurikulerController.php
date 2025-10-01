<?php

namespace App\Http\Controllers;

use App\Models\Ekstrakurikuler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EkstrakurikulerController extends Controller
{
    public function daftarEkstrakurikuler(){
        $ekstrakurikuler = Ekstrakurikuler::all();
        return inertia('Ekstrakurikuler/DaftarEkstrakurikuler', ['ekstrakurikuler' => $ekstrakurikuler]);
    }

    public function showEkstrakurikuler(String $id){
        $ekstrakurikuler = Ekstrakurikuler::findOrFail($id);
        return inertia('Ekstrakurikuler/DetailEkstrakurikuler', ['ekstrakurikuler' => $ekstrakurikuler]);
    }

    public function simpanEkstrakurikuler(Request $request){
        $validasi = $request->validate([
            'nama' => 'required|string|max:100',
            'pembina' => 'required|string|max:100',
            'jadwal_latihan' => 'required|string|max:100',
            'deskripsi' => 'required|string',
            'gambar' => 'required|mimes:jpg,jpeg,png|max:5120',
        ]);

        $file = $request->file('gambar');

        $filename = time().".".$file->getClientOriginalExtension();
        $file->storeAs('ekstrakurikuler', $filename);

        $validasi['gambar'] = $filename;

        Ekstrakurikuler::create($validasi);
        return redirect('/admin/daftar/ekstrakurikuler')->with('success', 'Data ekstrakurikuler berhasil ditambahkan.');
    }

    public function updateEkstrakurikuler(Request $request, String $id){
        $validasi = $request->validate([
            'nama' => 'nullable|string|max:100',
            'pembina' => 'nullable|string|max:100',
            'jadwal_latihan' => 'nullable|string|max:100',
            'deskripsi' => 'nullable|string',
            'gambar' => 'nullable|mimes:jpg,jpeg,png|max:5120',
        ]);

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

        $ekstrakurikuler->update($validasi);

        return redirect('/admin/daftar/ekstrakurikuler')->with('success', 'Data ekstrakurikuler berhasil diupdate.');
    }

    public function hapusEkstrakurikuler(String $id){
        $ekstrakurikuler = Ekstrakurikuler::findOrFail($id);
        if (Storage::exists('ekstrakurikuler/'.$ekstrakurikuler->gambar)) {
            Storage::delete('ekstrakurikuler/'.$ekstrakurikuler->gambar);
        }
        $ekstrakurikuler->delete();
        return redirect('/admin/daftar/ekstrakurikuler')->with('success', 'Data ekstrakurikuler berhasil dihapus.');
    }
}
