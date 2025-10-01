<?php

namespace App\Http\Controllers;

use App\Models\Galeri;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GaleriController extends Controller
{
    public function daftarGaleri(){
        $galeri = Galeri::all();
        return inertia('Galeri/DaftarGaleri', ['galeri' => $galeri]);
    }

    public function showGaleri(String $id){
        $galeri = Galeri::findOrFail($id);
        return inertia('Galeri/DetailGaleri', ['galeri' => $galeri]);
    }

    public function simpanGaleri(Request $request){
        $validasi = $request->validate([
            'judul' => 'required|string|max:100',
            'keterangan' => 'required|string|max:255',
            'file' => 'required|mimes:jpg,jpeg,png,gif,mp4,mov,avi,mkv|max:20480',
            'kategori' => 'required|string|max:50',
            'tanggal' => 'required|date',
        ]);

        $file = $request->file('file');
        $filename = time().".".$file->getClientOriginalExtension();
        $file->storeAs('galeri', $filename);

        $validasi['file'] = $filename;

        Galeri::create($validasi);

        return redirect('/admin/daftar/galeri')->with('success', 'Data galeri berhasil ditambahkan.');
    }

    public function updateGaleri(Request $request, String $id){
        $validasi = $request->validate([
            'judul' => 'nullable|string|max:100',
            'keterangan' => 'nullable|string|max:255',
            'file' => 'nullable|mimes:jpg,jpeg,png,gif,mp4,mov,avi,mkv|max:20480',
            'kategori' => 'nullable|string|max:50',
            'tanggal' => 'nullable|date',
        ]);

        $galeri = Galeri::findOrFail($id);

        //upload file baru jika ada
        if ($request->hasFile('file')) {
            if (Storage::exists('galeri/'.$galeri->file)) {
                Storage::delete('galeri/'.$galeri->file);
            }
            $file = $request->file('file');
            $filename = time().".".$file->getClientOriginalExtension();
            $file->storeAs('galeri', $filename);

            $validasi['file'] = $filename;
        } else {
            $validasi['file'] = $galeri->file;
        }

        $galeri->update($validasi);

        return redirect('/admin/daftar/galeri')->with('success', 'Data galeri berhasil diupdate.');
    }

    public function hapusGaleri(String $id){
        $galeri = Galeri::findOrFail($id);
        if (Storage::exists('galeri/'.$galeri->file)) {
            Storage::delete('galeri/'.$galeri->file);
        }
        $galeri->delete();
        return redirect('/admin/daftar/galeri')->with('success', 'Data galeri berhasil dihapus.');
    }
}
