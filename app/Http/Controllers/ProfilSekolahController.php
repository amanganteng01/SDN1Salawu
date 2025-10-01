<?php

namespace App\Http\Controllers;

use App\Models\ProfilSekolah;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProfilSekolahController extends Controller
{
    public function daftarProfilSekolah()
    {
        $profil = ProfilSekolah::all();
        return Inertia::render('ProfilSekolah/DaftarProfilSekolah', ['profil' => $profil]);
    }

    public function showProfilSekolah($id)
    {
        $profil = ProfilSekolah::findOrFail($id);
        return Inertia::render('ProfilSekolah/DetailProfilSekolah', ['profil' => $profil]);
    }

    public function simpanProfilSekolah(Request $request)
    {
        $validasi = $request->validate([
            'nama_sekolah'   => 'required|string|max:150',
            'kepala_sekolah' => 'required|string|max:100',
            'foto'           => 'required|image|mimes:jpg,jpeg,png|max:2048',
            'logo'           => 'required|image|mimes:jpg,jpeg,png|max:2048',
            'npsn'           => 'required|string|max:20',
            'alamat'         => 'required|string|max:255',
            'kontak'         => 'required|string|max:20',
            'visi_misi'      => 'required|string',
            'tahun_berdiri'  => 'required|integer|min:1900|max:' . date('Y'),
            'deskripsi'      => 'required|string',
        ]);

        $foto = $request->file('foto');
        $logo = $request->file('logo');
        $fotoName = time().".".$foto->getClientOriginalExtension();
        $logoName = time().".".$logo->getClientOriginalExtension();
        
        $foto->stroreAs('foto', $fotoName);
        $logo->storeAs('logo', $logoName);

        $validasi['foto'] = $fotoName;
        $validasi['logo'] = $logoName;

        ProfilSekolah::create($validasi);
        return redirect('/admin/daftar/profil/sekolah')->with('success', 'Data profil sekolah berhasil ditambahkan.');
    }

    public function updateProfilSekolah(Request $request, $id)
    {
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

        $profil = ProfilSekolah::findOrFail($id);

        //upload foto baru jika ada
        if ($request->hasFile('foto')) {
            if (Storage::exists('foto/'.$profil->foto)) {
                Storage::delete('foto/'.$profil->foto);
            }
            $foto = $request->file('foto');
            $fotoName = time().".".$foto->getClientOriginalExtension();
            $foto->storeAs('foto', $fotoName);

            $validasi['foto'] = $fotoName;
        }

        //upload logo baru jika ada
        if ($request->hasFile('logo')) {
            if (Storage::exists('logo/'.$profil->logo)) {
                Storage::delete('logo/'.$profil->logo);
            }
            $logo = $request->file('logo');
            $logoName = time().".".$logo->getClientOriginalExtension();
            $logo->storeAs('logo', $logoName);

            $validasi['logo'] = $logoName;
        }

        $profil->update($validasi);
        return redirect('/admin/daftar/profil/sekolah')->with('success', 'Data profil sekolah berhasil diperbarui.');
    }

    public function hapusProfilSekolah($id)
    {
        $profil = ProfilSekolah::findOrFail($id);
        if (Storage::exists('foto/'.$profil->foto)) {
            Storage::delete('foto/'.$profil->foto);
        }
        if (Storage::exists('logo/'.$profil->logo)) {
            Storage::delete('logo/'.$profil->logo);
        }
        $profil->delete();
        return redirect('/admin/daftar/profil/sekolah')->with('success', 'Data profil sekolah berhasil dihapus.');
    }
}
