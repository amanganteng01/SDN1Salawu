<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminViewController extends Controller
{
    <?php

namespace App\Http\Controllers;

use App\Models\profil_sekolah;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Storage;

class profilSekolahController extends Controller
{
    //
    public function info()
    {
        $ps = profil_sekolah::all();
        return view('profilSekolah', compact('ps'));
    }

    public function create()
    {
        return view('admin.createProf');
    }

    public function store(Request $request)
    {
    $request->validate([
        'nama_sekolah' => 'required',
        'kepala_sekolah' => 'required',
        'foto' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        'logo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    // Upload foto
    if($request->hasFile('foto')) {
        $foto = $request->file('foto');
        $fotoName = time().'_'.$foto->getClientOriginalName();
        $foto->move(public_path('uploads'), $fotoName);
    } else {
        $fotoName = null;
    }

    // Upload logo
    if($request->hasFile('logo')) {
        $logo = $request->file('logo');
        $logoName = time().'_'.$logo->getClientOriginalName();
        $logo->move(public_path('uploads'), $logoName);
    } else {
        $logoName = null;
    }

    profil_sekolah::create([
        'nama_sekolah' => $request->nama_sekolah,
        'kepala_sekolah' => $request->kepala_sekolah,
        'foto' => $fotoName,
        'logo' => $logoName,
        'npsn' => $request->npsn,
        'kontak' => $request->kontak,
        'alamat' => $request->alamat,
        'visi_misi' => $request->visi_misi,
        'tahun_berdiri' => $request->tahun_berdiri,
        'deskripsi' => $request->deskripsi,
    ]);

    return redirect()->route('admin.profilSek')->with('success', 'Data berhasil disimpan!');
  }

    public function delete($id)
    {
        try {
            $id = Crypt::decrypt($id);
        } catch (DecryptException $e) {
             return redirect()->back()->with('error', $e->getMessage());
        }
        $profil = profil_sekolah::findOrFail($id);

        // Hapus file foto dan logo
        if ($profil->foto) {
            Storage::disk('public')->delete($profil->foto);
        }
        if ($profil->logo) {
            Storage::disk('public')->delete($profil->logo);
        }

        $profil->delete();

        return redirect()->route('admin.profilSek')->with('success', 'Data berhasil dihapus');
    }

    public function edit(String $id, Request $request)
{
    try {
        $id = Crypt::decrypt($id);
    } catch (DecryptException $e) {
        return redirect()->back()->with('error', $e->getMessage());
    }

    $profil = profil_sekolah::findOrFail($id);
    return view('admin.editProf', compact('profil'));
}

public function update(Request $request, String $id)
{
    try {
        $id = Crypt::decrypt($id);
    } catch (DecryptException $e) {
        return redirect()->back()->with('error', $e->getMessage());
    }

    $profil = profil_sekolah::findOrFail($id);

    // Validasi
    $request->validate([
        'nama_sekolah' => 'required',
        'kepala_sekolah' => 'required',
        'foto' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        'npsn' => 'nullable|string',
        'kontak' => 'nullable|string',
        'alamat' => 'nullable|string',
        'visi_misi' => 'nullable|string',
        'tahun_berdiri' => 'nullable|date_format:Y',
        'deskripsi' => 'nullable|string',
    ]);

    $profil->nama_sekolah = $request->nama_sekolah;
    $profil->kepala_sekolah = $request->kepala_sekolah;
    $profil->npsn = $request->npsn;
    $profil->kontak = $request->kontak;
    $profil->alamat = $request->alamat;
    $profil->visi_misi = $request->visi_misi;
    $profil->tahun_berdiri = $request->tahun_berdiri;
    $profil->deskripsi = $request->deskripsi;

    // Upload foto baru jika ada
    if ($request->hasFile('foto')) {
        if ($profil->foto) {
            // untuk hpus logo lama
            if (file_exists(public_path('uploads/' . $profil->foto))) {
                unlink(public_path('uploads/' . $profil->foto));
            }
        }
        $foto = $request->file('foto');
        $fotoName = time().'_'.$foto->getClientOriginalName();
        $foto->move(public_path('uploads'), $fotoName);
        $profil->foto = $fotoName;
    }

    // Upload logo baru jika ada
    if ($request->hasFile('logo')) {
        if ($profil->logo) {
            // untuk Hapus logo lama
            if (file_exists(public_path('uploads/' . $profil->logo))) {
                unlink(public_path('uploads/' . $profil->logo));
            }
        }
        $logo = $request->file('logo');
        $logoName = time().'_'.$logo->getClientOriginalName();
        $logo->move(public_path('uploads'), $logoName);
        $profil->logo = $logoName;
    }

    $profil->save();

    return redirect()->route('admin.profilSek')->with('success', 'Data berhasil diperbarui!');
}


}
}
