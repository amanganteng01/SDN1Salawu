<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class BeritaController extends Controller
{
    public function daftarBerita(){
        $berita = Berita::all();
        return inertia('Berita/DaftarBerita', ['berita' => $berita]);
    }
    
    public function showBerita(String $id){
        $berita = Berita::findOrFail($id);
        return inertia('Berita/DetailBerita', ['berita' => $berita]);
    }

    public function simpanBerita(Request $request){
        $validasi = $request->validate([
            'judul' => 'required|string|max:100',
            'isi' => 'required|string',
            'tanggal' => 'required|date',
            'gambar' => 'required|mimes:jpg,jpeg,png|max:5120',
        ]);

        $validasi['user_id'] = Auth::user()->id;    

        $file = $request->file('gambar');
        $filename = time().".".$file->getClientOriginalExtension();
        $file->storeAs('berita', $filename);

        $validasi['gambar'] = $filename;

        Berita::create($validasi);

        return redirect('/admin/daftar/berita')->with('success', 'Data berita berhasil ditambahkan.');
    }

    public function updateBerita(Request $request, String $id){
        $validasi = $request->validate([
            'judul' => 'nullable|string|max:100',
            'isi' => 'nullable|string',
            'tanggal' => 'nullable|date',
            'gambar' => 'nullable|mimes:jpg,jpeg,png|max:5120',
        ]);

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

        $berita->update($validasi);

        return redirect('/admin/daftar/berita')->with('success', 'Data berita berhasil diupdate.');
    }

    public function hapusBerita(String $id){
        $berita = Berita::findOrFail($id);
        if (Storage::exists('berita/'.$berita->gambar)) {
            Storage::delete('berita/'.$berita->gambar);
        }
        $berita->delete();
        return redirect('/admin/daftar/berita')->with('success', 'Data berita berhasil dihapus.');
    }
}
