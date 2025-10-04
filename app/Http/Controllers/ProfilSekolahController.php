<?php

namespace App\Http\Controllers;

use App\Models\ProfilSekolah;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProfilSekolahController extends Controller
{
    public function showProfilSekolah()
    {
        $id = 1;
        // Mendapatkan data profil sekolah berdasarkan id
        $profil = ProfilSekolah::findOrFail($id);
        // Menampilkan halaman detail profil sekolah dengan data yang telah diambil
        return Inertia::render('ProfilSekolah/DetailProfilSekolah', ['profil' => $profil]);
    }

    public function updateProfilSekolah(Request $request, $id)
    {
        // Validasi inputan dari form edit profil sekolah
        $validasi = $request->validate([
            'nama_sekolah'   => 'nullable|string|max:150',
            'kepala_sekolah' => 'nullable|string|max:100',
            'foto'           => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'logo'           => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'npsn'           => 'nullable|string|max:20',
            'alamat'         => 'nullable|string|max:255',
            'kontak'         => 'nullable|string|max:20',
            'visi_misi'      => 'nullable|string',
            'tahun_berdiri'  => 'nullable|integer|min:1900|max:' . date('Y'),
            'deskripsi'      => 'nullable|string',
        ]);

        // Mendapatkan data profil sekolah berdasarkan id
        $profil = ProfilSekolah::findOrFail($id);

        //upload foto baru jika ada
        if ($request->hasFile('foto')) {
            if (Storage::exists('foto/'.$profil->foto)) {
                Storage::delete('foto/'.$profil->foto);
            }
            $foto = $request->file('foto');
            // Memberi nama file dengan timestamp agar unik
            $fotoName = time().".".$foto->getClientOriginalExtension();
            $foto->storeAs('foto', $fotoName);

            // Menyimpan nama file gambar ke dalam validasi
            $validasi['foto'] = $fotoName;
        } else {
            $validasi['foto'] = $profil->foto;
        }

        //upload logo baru jika ada
        if ($request->hasFile('logo')) {
            if (Storage::exists('logo/'.$profil->logo)) {
                Storage::delete('logo/'.$profil->logo);
            }
            $logo = $request->file('logo');
            // Memberi nama file dengan timestamp agar unik
            $logoName = time().".".$logo->getClientOriginalExtension();
            $logo->storeAs('logo', $logoName);

            // Menyimpan nama file gambar ke dalam validasi
            $validasi['logo'] = $logoName;
        } else {
            $validasi['logo'] = $profil->logo;
        }

        // Menyimpan data profil sekolah ke database
        $profil->update($validasi);
        // Mengembalikan ke halaman detail profil sekolah dengan pesan sukses
        return redirect('/admin/show/profil/sekolah')->with('success', 'Data profil sekolah berhasil diperbarui.');
    }
}
