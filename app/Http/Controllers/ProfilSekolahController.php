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
        $profil = ProfilSekolah::findOrFail($id);
        
        // Tambahkan URL lengkap untuk foto dan logo
        if ($profil->foto) {
            $profil->foto_url = Storage::url('foto/' . $profil->foto);
        }
        if ($profil->logo) {
            $profil->logo_url = Storage::url('logo/' . $profil->logo);
        }
        
        return Inertia::render('ProfilSekolah/DetailProfilSekolah', ['profil' => $profil]);
    }

    public function updateProfilSekolah(Request $request, $id)
    {
        // Validasi
        $validasi = $request->validate([
            'nama_sekolah'   => 'required|string|max:150',
            'kepala_sekolah' => 'required|string|max:100',
            'foto'           => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'logo'           => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'npsn'           => 'required|string|max:20',
            'alamat'         => 'required|string|max:255',
            'kontak'         => 'required|string|max:20',
            'visi'           => 'required|string',
            'misi'           => 'required|string',
            'tahun_berdiri'  => 'required|integer|min:1900|max:' . date('Y'),
            'deskripsi'      => 'required|string',
            'nilai_budaya'   => 'required|string',
        ]);

        $profil = ProfilSekolah::findOrFail($id);

        // Upload foto baru jika ada
        if ($request->hasFile('foto')) {
            // Hapus foto lama jika ada
            if ($profil->foto && Storage::exists('foto/' . $profil->foto)) {
                Storage::delete('foto/' . $profil->foto);
            }
            
            $foto = $request->file('foto');
            $fotoName = 'foto_' . time() . '.' . $foto->getClientOriginalExtension();
            
            // Simpan ke storage - Gunakan putFileAs untuk lebih reliable
            $foto->storeAs('foto', $fotoName);
            $validasi['foto'] = $fotoName;
        } else {
            // Pertahankan foto lama jika tidak ada upload baru
            unset($validasi['foto']);
        }

        // Upload logo baru jika ada
        if ($request->hasFile('logo')) {
            // Hapus logo lama jika ada
            if ($profil->logo && Storage::exists('logo/' . $profil->logo)) {
                Storage::delete('logo/' . $profil->logo);
            }
            
            $logo = $request->file('logo');
            $logoName = 'logo_' . time() . '.' . $logo->getClientOriginalExtension();
            
            // Simpan ke storage
            $logo->storeAs('logo', $logoName);
            $validasi['logo'] = $logoName;
        } else {
            // Pertahankan logo lama jika tidak ada upload baru
            unset($validasi['logo']);
        }

        // Update data
        $profil->update($validasi);
        
        return redirect('/admin/show/profil/sekolah')->with('success', 'Data profil sekolah berhasil diperbarui.');
    }
}